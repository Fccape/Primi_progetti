import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './component/hello.component';
import { CardComponent } from './shared/card/card.component';
import { TabbarComponent } from './shared/tabbar/tabbar.component';
import { MeteoComponent } from './shared/meteo/meteo.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, CardComponent, TabbarComponent, MeteoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
