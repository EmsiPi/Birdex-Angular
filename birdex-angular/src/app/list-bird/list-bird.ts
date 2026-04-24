
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
}
