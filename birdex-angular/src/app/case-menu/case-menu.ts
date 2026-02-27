import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case-menu',
  imports: [],
  templateUrl: './case-menu.html',
  styleUrls: ['./case-menu.css'],
})
export class CaseMenu {
  @Input() titre!: String
}
