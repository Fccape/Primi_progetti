import { User, Company } from './model/user';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div
      *ngFor="
        let user of users;
        let i = index;
        let dispari = odd;
        let last = last
      "
    >
      {{ i + 1 }}. {{ user.name }} {{ user.company.name }}
      <div *ngIf="dispari"><hr /></div>
      <div *ngIf="last">End of list</div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users!: User[];

  constructor(http: HttpClient) {
    setTimeout(() => {
      http
        .get<User[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe((result) => (this.users = result));
    }, 1000);
  }
}
