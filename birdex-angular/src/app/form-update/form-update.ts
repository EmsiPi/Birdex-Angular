import { NgForm, FormsModule } from '@angular/forms';
import { Bird, CreateBird } from '../bird/bird';
import { ControleBirds } from '../controle-birds';
import { Component, EventEmitter, inject, Input, input, model, Output } from '@angular/core';

@Component({
  selector: 'app-up-formulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-update.html'
})
export class FormUpdate {

  private birdService = inject(ControleBirds);
  birdAEditer = input<Bird>();
  @Output() saveSuccess = new EventEmitter<Bird>();

  onSubmit(form: NgForm) {
    const currentBird = this.birdAEditer(); // On récupère la valeur du signal

    if (form.valid && currentBird) {
      const birdData: CreateBird = {
        name: form.value.name,
        date: form.value.date,
        location: form.value.location
      };

      this.birdService.updateBird(birdData, currentBird._id);

      // 2. On crée l'objet complet mis à jour pour le renvoyer au parent
      const updatedBird: Bird = { ...currentBird, ...birdData };

      // 3. On émet l'objet mis à jour (et pas undefined !)
      this.saveSuccess.emit(updatedBird);
    }

  }
}