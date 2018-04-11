import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { WeatherPageComponent } from "./weather-page/weather-page.component";

import { WeatherService } from "./service/weather.service";
import { WeatherDetailsComponent } from "./weather-details/weather-details.component";
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { WindDetailComponent } from './details/wind-detail/wind-detail.component';

@NgModule({
  declarations: [AppComponent, WeatherPageComponent, WeatherDetailsComponent, WeatherMainComponent, WindDetailComponent],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
