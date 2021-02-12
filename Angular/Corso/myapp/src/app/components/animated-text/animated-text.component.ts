import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent,
} from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  animations: [
    trigger('textAnimated', [
      state(
        'show',
        style({
          opacity: 1,
          marginTop: 0,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          marginTop: 50,
        })
      ),
      transition('show <=> hide', [
        animate('0.5s cubic-bezier(0.645, 0.045, 0.355, 1)'),
      ]),
    ]),
  ],
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.css'],
})
export class AnimatedTextComponent implements OnChanges {
  @Input() text?: string;
  textToShow?: string;

  state = 'show';

  // tslint:disable-next-line: typedef
  ngOnChanges(changes: SimpleChanges) {
    if (changes.text.firstChange) {
      this.textToShow = changes.text.currentValue;
    } else {
      this.state = 'hide';
    }
  }

  // tslint:disable-next-line: typedef
  showNext(event: AnimationEvent) {
    if (event.toState === 'hide') {
      this.state = 'show';
      this.textToShow = this.text;
    }
  }
}
