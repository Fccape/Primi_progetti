import { User, Company } from './model/user';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { TabbarItem } from './model/tabbar';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  city = { value: 'Milano' };

  // tslint:disable-next-line: typedef
  changeCity(form: NgForm) {
    // this.city.value = form.value.city;
    this.city = { value: form.value.city };
  }
}
