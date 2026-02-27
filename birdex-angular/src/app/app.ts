import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CaseMenu } from './case-menu/case-menu';
import { Formulaire } from './formulaire/formulaire';
import { ListBird } from './list-bird/list-bird';
import { EnTete } from './en-tete/en-tete';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('birdex-angular');
  titre1 = "Aller voir mon carnet"
}
