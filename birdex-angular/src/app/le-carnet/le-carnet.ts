import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EnTete } from '../en-tete/en-tete';
import { ListBird } from '../list-bird/list-bird';

@Component({
  selector: 'app-le-carnet',
  imports: [RouterLink, EnTete, ListBird],
  templateUrl: './le-carnet.html',
  styleUrl: './le-carnet.css',
})
export class LeCarnet {

}
