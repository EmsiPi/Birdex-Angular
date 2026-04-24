import { NgForm, FormsModule } from '@angular/forms';
import { CreateBird } from '../bird/bird';
import { ControleBirds } from '../controle-birds';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulaire.html'
})
export class Formulaire {
  private birdService = inject(ControleBirds);

  onSubmit(form: NgForm) {

    if (form.valid) {
      const bird: CreateBird = {
        name: form.value.name,
        date: form.value.date,
        location: form.value.location
      };

      // On appelle le service (qui fera le POST HTTP)
      this.birdService.addBird(bird);

      form.reset();
    }
  }
}
