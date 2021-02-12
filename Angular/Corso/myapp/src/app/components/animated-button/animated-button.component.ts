import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  animations: [
    trigger('buttonAnimated', [
      state(
        'over',
        style({
          backgroundColor: 'red',
          transform: 'scale(1.3) rotate(20deg)',
        })
      ),
      state(
        'out',
        style({
          backgroundColor: 'white',
          transform: 'scale(1) rotate(0deg)',
        })
      ),
      state(
        'selected',
        style({
          borderColor: 'white',
          backgroundColor: 'purple',
          color: 'white',
          transform: 'scale(1.3) rotate(-10deg)',
        })
      ),
      transition('out <=> over', [
        animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'),
      ]),
      transition('* <=> selected', [
        animate('0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
      ]),
    ]),
  ],
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.css'],
})
export class AnimatedButtonComponent implements OnChanges {
  @Input() selected = false;
  state = 'out';

  // tslint:disable-next-line: typedef
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selected) {
      this.state = changes.selected.currentValue ? 'selected' : 'out';
    }
    // console.log(changes);
  }
}
