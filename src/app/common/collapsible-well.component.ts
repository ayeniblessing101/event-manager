import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})

export class CollapsibleWellComponent {
  @Input() title: string;
  isVisible = true;

  constructor() { }

  toggleContent() {
    this.isVisible = false;
  }
}
