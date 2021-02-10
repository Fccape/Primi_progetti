import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabbarItem } from 'src/app/model/tabbar';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css'],
})
export class TabbarComponent {
  @Input() items!: TabbarItem[];
  @Input() active!: TabbarItem;
  @Output() tabClick: EventEmitter<TabbarItem> = new EventEmitter();

  // tslint:disable-next-line: typedef
  action(item: TabbarItem) {
    this.tabClick.emit(item);
  }
}
