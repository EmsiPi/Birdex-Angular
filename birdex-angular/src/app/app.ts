import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PremierComposant } from '../premier-composant/premier-composant';
import { CaseMenu } from '../case-menu/case-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PremierComposant, CaseMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('birdex-angular');
  titre1 = "Aller voir mon carnet"
}
