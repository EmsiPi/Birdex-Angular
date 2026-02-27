import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ControleBirds } from '../controle-birds';
import { Bird } from '../bird/bird';

@Component({
  selector: 'app-formulaire',
  imports: [FormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})

export class Formulaire {

  constructor(private controleBirds: ControleBirds) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value); // { username: '...', password: '...' }
    }

    let formulaire = form.value;
    let bird = new Bird(formulaire.date, formulaire.location, formulaire.name);
    let observable = this.controleBirds.addBird(bird);
    observable.subscribe(value => console.log('Observable emitted the next value: ' + value));
  }
}
