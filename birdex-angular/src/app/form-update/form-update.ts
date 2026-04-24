import { NgForm, FormsModule } from '@angular/forms';
import { Bird, CreateBird } from '../bird/bird';
import { ControleBirds } from '../controle-birds';
import { Component, inject, input, model } from '@angular/core';

@Component({
  selector: 'app-up-formulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-update.html'
})
export class FormUpdate {
  private birdService = inject(ControleBirds);
  birdAEditer = input<Bird>();

  onSubmit(form: NgForm) {

    if (form.valid) {
      const bird: CreateBird = {
        name: form.value.name,
        date: form.value.date,
        location: form.value.location
      };

      this.birdService.updateBird(bird, this.birdAEditer()!!._id);

      form.reset();
    }
  }
}