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

  currentIndex = 0;

  nextSlide(count: number) {
    this.currentIndex = (this.currentIndex + 1) % count;
  }

  lastSlide(count: number) {
    const totalBirds = this.birdService.birds().length;
    this.currentIndex = (this.currentIndex - 1) % count;
  }
}
