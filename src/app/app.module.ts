import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HoroscopeComponent } from './components/horoscope/horoscope.component';
import { HoroscopeService } from './services/horoscope.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, HoroscopeComponent],
  providers: [HoroscopeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
