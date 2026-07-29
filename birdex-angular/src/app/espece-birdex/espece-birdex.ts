import { Component, Input, inject, computed } from '@angular/core';
import { Bird, BirdEspeces } from '../bird/bird';
import { ControleBirds } from '../controle-birds';

@Component({
  selector: 'app-espece-birdex',
  imports: [],
  templateUrl: './espece-birdex.html',
  styleUrl: './espece-birdex.css',
})
export class EspeceBirdex {
  protected birdService = inject(ControleBirds);
  @Input({ required: true }) espece!: BirdEspeces;

  protected urlImages = computed(() => {
    return this.birdService.image(this.espece.name);
  });
}
