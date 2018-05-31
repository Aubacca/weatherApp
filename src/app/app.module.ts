import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '@app/app.component';
import { CurrentModule } from '@currentWeather/current.module';
import { HomeComponent } from '@app/component/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [AppRoutingModule, BrowserModule, CurrentModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
