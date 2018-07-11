import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@app/component/home/home.component';
import { CurrentModule } from '@currentWeather/current.module';
import { WithObservablesModule } from '@app/withObservables/with-observables.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CurrentModule,
    WithObservablesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
