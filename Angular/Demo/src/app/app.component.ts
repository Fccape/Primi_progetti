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
  public myName: string = '';
  public myAge: string = '';

  public mostra() {
    this.myName = 'Francesco';
    this.myAge = '30';
  }
  public nascondi() {
    this.myName = '';
    this.myAge = '';
  }
}
