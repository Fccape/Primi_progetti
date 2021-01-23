import { Component, Input } from '@angular/core';

@Component({
  selector: 'gmap',
  template: ` <div>{{ nome }} ha {{ eta }} anni!</div> `,
})
export class MapComponent {
  @Input() nome: string = '';
  @Input() eta: string = '';
}
