import { Component, Input, inject } from '@angular/core';
import { Bird } from '../bird/bird';
import { CommonModule } from '@angular/common';
import { ControleBirds } from '../controle-birds';
import { FormUpdate } from '../form-update/form-update';

@Component({
  selector: 'app-premier-composant',
  standalone: true,
  imports: [CommonModule, FormUpdate],
  templateUrl: './premier-composant.html',
  styleUrls: ['./premier-composant.css']
})
export class PremierComposant {
  @Input({ required: true }) bird!: Bird;

  private birdService = inject(ControleBirds);

  deleteBird() {
    console.log('Suppression de :', this.bird.name);
    // On appelle directement la méthode async du service
    this.birdService.deleteBird(this.bird._id);
  }
}
