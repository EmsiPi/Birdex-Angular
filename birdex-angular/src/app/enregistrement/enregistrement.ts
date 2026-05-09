import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EnTete } from '../en-tete/en-tete';
import { Formulaire } from '../formulaire/formulaire';
import { ControleBirds } from '../controle-birds';
import { Historique } from '../historique/historique';
@Component({
  selector: 'app-enregistrement',
  imports: [RouterLink, EnTete, Formulaire, Historique],
  templateUrl: './enregistrement.html',
  styleUrl: './enregistrement.css',
})
export class Enregistrement {
  protected birdService = inject(ControleBirds);

  ngOnInit() {
    // On demande au service de charger les données
    this.birdService.getAll();
  }

}
