import { Component } from '@angular/core';

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

  public colleghi = [
    { id: 1, nome: 'Francesco', cognome: 'Carlomagno' },
    { id: 2, nome: 'Jessica', cognome: 'Giordano' },
    { id: 3, nome: 'Stefano', cognome: 'Bellorio' },
  ];

  public myName: string = '';
  public myCognome: string = '';

  public mostra(tab: { nome: string; cognome: string }) {
    this.myName = tab.nome;
    this.myCognome = tab.cognome;
  }
}
