import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { WeatherPageComponent } from "./weather-page/weather-page.component";

@NgModule({
  declarations: [AppComponent, WeatherPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
