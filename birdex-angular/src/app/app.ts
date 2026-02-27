import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaseMenu } from './case-menu/case-menu';
import { Formulaire } from './formulaire/formulaire';
import { ListBird } from './list-bird/list-bird';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CaseMenu, Formulaire, ListBird],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('birdex-angular');
  titre1 = "Aller voir mon carnet"
}
