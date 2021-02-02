import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <li *ngFor="let user of users">{{ user.id }} {{ user.name }}</li>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = [
    { id: 1, name: 'Francesco' },
    { id: 2, name: 'Jessica' },
    { id: 3, name: 'Stefano' },
  ];

  constructor() {
    this.users.push;
  }
}
