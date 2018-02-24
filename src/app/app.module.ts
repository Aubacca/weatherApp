import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { WeatherPageComponent } from "./weather-page/weather-page.component";

import { WeatherService } from "./weather-page/service/weather.service";

@NgModule({
  declarations: [AppComponent, WeatherPageComponent],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
