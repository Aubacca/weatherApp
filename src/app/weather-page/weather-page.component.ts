import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./service/weather.service";

@Component({
  selector: "app-weather-page",
  template: `
      <div class="container">
        <form (ngSubmit)="doSubmit(citySearch)" #citySearch="ngForm">
          <label for="">Stadt:</label>
          <input type="text" name="cityName" ngModel placeholder="Enter name of the city to be searched for..">
          <br>
          <input type="submit" value="Search">
        </form>
        <div>{{this.weatherData | json}}</div>
      </div>
    `,
  styleUrls: ["./weather-page.component.css"]
})
export class WeatherPageComponent implements OnInit {
  private weatherData;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  doSubmit(searchValues) {
    console.log("Form submitted! searchValue: ", searchValues);
    console.log("Form submitted! cityName: ", searchValues.value.cityName);
    this.weatherData = this.weatherService
      .getWeather(searchValues.value.cityName)
      .subscribe(data => (this.weatherData = data));
    console.log("this.weatherData:", this.weatherData);
  }
}
