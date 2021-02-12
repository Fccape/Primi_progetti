import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  animations: [
    trigger('collapsable', [
      state(
        'opened',
        style({
          height: '*',
        })
      ),
      state(
        'closed',
        style({
          height: 0,
          padding: 0,
        })
      ),
      transition('opened <=> closed', [
        animate('0.7s cubic-bezier(0.76, 0, 0.24, 1)'),
      ]),
    ]),
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor() {}
  @Input() title = 'N/D';

  state = 'closed';
  opened = false;

  toggle() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';
  }
}
