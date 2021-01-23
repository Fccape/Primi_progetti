import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Collega } from './model/collega';

@Component({
  selector: 'tabbar',
  template: `
    <div>
      <button
        class="green"
        [ngClass]="{ green: true }"
        *ngFor="let tab of items"
        (click)="itemClickHandler(tab)"
      >
        {{ tab.cognome }}
      </button>
    </div>
  `,
})
export class TabbarComponent {
  @Input() items!: Collega[];
  @Output() onTabClick: EventEmitter<Collega> = new EventEmitter();

  itemClickHandler(tab: Collega) {
    this.onTabClick.emit(tab);
  }
}
