import { Component, signal } from '@angular/core';
import { Bird } from '../bird/bird';
import { PremierComposant } from '../premier-composant/premier-composant';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ControleBirds } from '../controle-birds';

@Component({
  selector: 'app-list-bird',
  imports: [PremierComposant, CommonModule],
  templateUrl: './list-bird.html',
  styleUrl: './list-bird.css',
})
export class ListBird {

  listBirds = signal<Bird[]>([]);
  constructor(private controleBirds: ControleBirds) {
    this.controleBirds.getBirds().subscribe(birds => {
      this.listBirds.set(birds);
    });

    console.log(this.listBirds)

  }

}