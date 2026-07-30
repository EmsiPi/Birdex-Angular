import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-en-tete',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './en-tete.html',
  styleUrl: './en-tete.css',
})
export class EnTete {
  @Input() backgroundColorCarnet = 'rgb(241, 239, 239)';
  @Input() backgroundColorPok = 'rgb(241, 239, 239)';

}
