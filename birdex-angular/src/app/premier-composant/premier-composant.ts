import { Component, Input } from '@angular/core';
import { Bird } from '../bird/bird';

@Component({
  selector: 'app-premier-composant',
  imports: [],
  templateUrl: './premier-composant.html',
  styleUrls: ['./premier-composant.css']
})
export class PremierComposant {
  @Input() bird!: Bird;
}
