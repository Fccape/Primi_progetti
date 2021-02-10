import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent {
  @Input()
  name!: string;
  @Input()
  color = 'green';
}
