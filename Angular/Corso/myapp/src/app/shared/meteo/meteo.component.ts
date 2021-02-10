import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { APP_TOKEN } from 'src/app/component/config';

@Component({
  selector: 'app-meteo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
})
export class MeteoComponent implements OnChanges {
  @Input() city!: any;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  weather!: any;
  // tslint:disable-next-line: typedef
  printme() {
    console.log('render');
  }
  // tslint:disable-next-line: typedef
  ngOnChanges(changes: SimpleChanges): void {
    const city = changes.city;
    if (city) {
      this.http
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city.currentValue.value}&units=metric&APPID=${APP_TOKEN}`
        )
        .subscribe((res) => {
          this.weather = res;
          this.cd.markForCheck();
          // console.log(this.weather);
        });
    }
  }
}
