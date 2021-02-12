import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { TabbarComponent } from './shared/tabbar/tabbar.component';
import { MeteoComponent } from './shared/meteo/meteo.component';
import { AnimatedButtonComponent } from './components/animated-button/animated-button.component';
import { AnimatedTextComponent } from './components/animated-text/animated-text.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TabbarComponent,
    MeteoComponent,
    AnimatedButtonComponent,
    AnimatedTextComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
