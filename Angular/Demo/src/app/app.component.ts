import { Component } from '@angular/core';
import { Collega } from './components/model/collega';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  public current: Collega;
  public colleghi: Collega[] = [
    { id: 1, nome: 'Rita', cognome: 'Lepore', progetto: 'SHS' },
    { id: 2, nome: 'Jessica', cognome: 'Giordano', progetto: 'Tagetik' },
    { id: 3, nome: 'Stefano', cognome: 'Bellorio', progetto: 'Libra' },
  ];

  constructor() {
    this.current = this.colleghi[0];
  }

  public myName: string = '';
  public myCognome: string = '';

  public mostra(tab: Collega) {
    this.current = tab;
  }
}
