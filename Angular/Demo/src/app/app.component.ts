import { Component } from '@angular/core';
import { Collega } from './components/model/collega';
import { User } from './components/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .user {
        border: 1px dashed lightblue;
        border-radius: 4px;
        padding: 10px;
        width: 250px;
        position: relative;
        margin: 10px;
      }
      .male {
        background-color: lightblue;
        color: white;
      }
      .female {
        background-color: pink;
      }
      .name {
        font-size: 20px;
      }
      .id {
        border-radius: 50%;
        position: absolute;
        left: 180px;
        top: 15px;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: bold;
      }
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    `,
  ],
})
export class AppComponent {
  // <!-- ***** 1° stream ***** -->;
  // public counter = 0;
  // public url = '';
  // public heightValue = 50;
  // public renderImage(): void {
  //   this.url =
  //     'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  // }
  // public nullifyImage(): void {
  //   this.url = '';
  // }
  // sum(a: number, b: number): number {
  //   return a + b;
  // }
  // public inc(): void {
  //   this.counter += 1;
  // }
  // <!-- ***** Fine 1° stream ***** -->;
  // <!-- ***** YouTube  ***** -->;
  // public current: Collega;
  // public colleghi: Collega[] = [
  //   { id: 1, nome: 'Rita', cognome: 'Lepore', progetto: 'SHS' },
  //   { id: 2, nome: 'Jessica', cognome: 'Giordano', progetto: 'Tagetik' },
  //   { id: 3, nome: 'Stefano', cognome: 'Bellorio', progetto: 'Libra' },
  // ];
  // constructor() {
  //   this.current = this.colleghi[0];
  // }
  // public myName: string = '';
  // public myCognome: string = '';
  // public mostra(tab: Collega) {
  //   this.current = tab;
  // }
  // <!-- ***** Fine YouTube  ***** -->;
  // <!-- ***** 2° stream ***** -->;
  // public users: User[];
  // constructor() {
  //   this.users = [
  //     {
  //       id: 1,
  //       name: 'Francesco',
  //       age: 30,
  //       gender: 'M',
  //       city: 'Torino',
  //       birthday: 1611955740000,
  //       bitcoins: 3.7483918,
  //     },
  //     {
  //       id: 2,
  //       name: 'Jessica',
  //       age: 27,
  //       gender: 'F',
  //       city: 'Torino',
  //       birthday: 1611955740000,
  //       bitcoins: 3.7,
  //     },
  //     {
  //       id: 3,
  //       name: 'Stefano',
  //       age: 25,
  //       gender: 'M',
  //       city: 'Torino',
  //       birthday: 1611955740000,
  //       bitcoins: 138,
  //     },
  //   ];
  // }
  // <!-- ***** Fine 2° stream ***** -->;
}
