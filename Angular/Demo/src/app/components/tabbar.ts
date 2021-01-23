import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tabbar',
  template: `
    <div>
      <button *ngFor="let tab of items" (click)="itemClickHandler(tab)">
        {{ tab.cognome }}
      </button>
    </div>
  `,
})
export class TabbarComponent {
  @Input() items: any;
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();

  itemClickHandler(tab: any) {
    this.onTabClick.emit(tab);
  }
}
