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

  private selectedFile: File | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log("Fichier sélectionné :", file.name);
    }
  }

  onSubmit(form: NgForm) {
    const currentBird = this.birdAEditer(); // On récupère la valeur du signal

    if (form.valid && currentBird) {
      // On utilise FormData pour emballer le texte ET le fichier
      const formData = new FormData();
      formData.append('name', form.value.name);
      formData.append('location', form.value.location);
      formData.append('date', form.value.date);
      // Le fichier à la fin
      if (this.selectedFile) {
        formData.append('image', this.selectedFile, this.selectedFile.name);
      }

      this.birdService.updateBird(formData, currentBird._id);

      // 2. On crée l'objet complet mis à jour pour le renvoyer au parent
      const updatedBird: Bird = { ...currentBird, ...formData };

      // 3. On émet l'objet mis à jour (et pas undefined !)
      this.saveSuccess.emit(updatedBird);
    }

  }



}