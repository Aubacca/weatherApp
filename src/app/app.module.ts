import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { WeatherPageComponent } from "./weather-page/weather-page.component";

import { WeatherService } from "./service/weather.service";
import { WeatherDataComponent } from "./details/weather-data/weather-data.component";
import { ConditionDetailComponent } from "./details/condition-detail/condition-detail.component";
import { WindDetailComponent } from "./details/wind-detail/wind-detail.component";
import { WindDirectionPipe } from "./utils/wind-direction.pipe";

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    WeatherDataComponent,
    ConditionDetailComponent,
    WindDetailComponent,
    WindDirectionPipe
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
