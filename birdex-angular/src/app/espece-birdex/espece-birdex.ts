import { Component, Input } from '@angular/core';
import { Bird } from '../bird/bird';

@Component({
  selector: 'app-espece-birdex',
  imports: [],
  templateUrl: './espece-birdex.html',
  styleUrl: './espece-birdex.css',
})
export class EspeceBirdex {
  @Input({ required: true }) espece!: string;
}
