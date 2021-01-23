import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Collega } from './model/collega';

@Component({
  selector: 'tabbar',
  template: `
    <div>
      <button
        class="btn btn-secondary"
        [ngClass]="{ 'btn-success': active?.id === tab.id }"
        *ngFor="let tab of items"
        (click)="itemClickHandler(tab)"
      >
        {{ tab.progetto }}
      </button>
    </div>
  `,
})
export class TabbarComponent {
  @Input() items!: Collega[];
  @Output() onTabClick: EventEmitter<Collega> = new EventEmitter();
  @Input() active?: Collega;

  itemClickHandler(tab: Collega) {
    this.onTabClick.emit(tab);
  }
}
