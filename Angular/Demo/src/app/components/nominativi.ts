import { Component, Input } from '@angular/core';

@Component({
  selector: 'nominativi',
  template: ` <div>{{ nome }} {{ cognome }}</div> `,
})
export class NomeComponent {
  @Input() nome: string = '';
  @Input() cognome: string = '';
}
