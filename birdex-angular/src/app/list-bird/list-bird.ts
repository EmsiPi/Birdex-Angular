
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremierComposant } from '../premier-composant/premier-composant';
import { ControleBirds } from '../controle-birds';

@Component({
  selector: 'app-list-bird',
  standalone: true,
  imports: [PremierComposant, CommonModule],
  templateUrl: './list-bird.html',
  styleUrl: './list-bird.css',
})
export class ListBird implements OnInit {
  // Syntaxe moderne avec inject()
  protected birdService = inject(ControleBirds);

  ngOnInit() {
    // On demande au service de charger les données
    this.birdService.getAll();
  }

  currentIndex = 0;

  nextSlide() {
    const totalBirds = this.birdService.birds().length;
    // On incrémente et on revient à 0 si on dépasse le nombre d'oiseaux
    this.currentIndex = (this.currentIndex + 1) % totalBirds;
  }

  lastSlide() {
    const totalBirds = this.birdService.birds().length;
    // On incrémente et on revient à 0 si on dépasse le nombre d'oiseaux
    this.currentIndex = (this.currentIndex - 1) % totalBirds;
  }
}
