import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EnTete } from '../en-tete/en-tete';
import { Formulaire } from '../formulaire/formulaire';

@Component({
  selector: 'app-enregistrement',
  imports: [RouterOutlet, RouterLink, EnTete, Formulaire],
  templateUrl: './enregistrement.html',
  styleUrl: './enregistrement.css',
})
export class Enregistrement {

}
