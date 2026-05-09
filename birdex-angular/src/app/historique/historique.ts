import { Component, Input, computed, inject } from '@angular/core';
import { Bird } from '../bird/bird';

@Component({
  selector: 'app-historique',
  imports: [],
  templateUrl: './historique.html',
  styleUrl: './historique.css',
})
export class Historique {
  @Input({ required: true }) bird!: Bird;

}
