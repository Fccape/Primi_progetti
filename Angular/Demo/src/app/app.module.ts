import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NomeComponent } from './components/nominativi';
import { TabbarComponent } from './components/tabbar';

@NgModule({
  declarations: [AppComponent, NomeComponent, TabbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
