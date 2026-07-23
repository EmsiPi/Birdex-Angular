
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnTete } from '../en-tete/en-tete';
import { ControleBirds } from '../controle-birds';

import { EspeceBirdex } from '../espece-birdex/espece-birdex';

@Component({
  selector: 'app-pokedex',
  imports: [RouterLink, EnTete, EspeceBirdex],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {
  protected birdService = inject(ControleBirds);

  ngOnInit() {
    this.birdService.initBirdex();
  }
}
