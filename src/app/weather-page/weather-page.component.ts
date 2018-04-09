import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../service/weather.service";
import { IWeather } from "../model/weather.model";

@Component({
  selector: "app-weather-page",
  template: `
      <div>
        <hr>
        <form (ngSubmit)="doSubmit(citySearch)" #citySearch="ngForm">
          <label for="">Stadt:</label>
          <input type="text" name="cityName" ngModel placeholder="Enter name of the city to be searched for..">
          <input type="submit" value="Search">
        </form>

        <hr>
        
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;" *ngIf="weatherData">
          <div class="card-header"><h3>{{weatherData.name}}</h3></div>
          <div class="card-body">
            <p class="card-text">
              <app-weather-details [weatherList]=weatherData.weather></app-weather-details>
              <app-weather-main [weatherMain]=weatherData.main></app-weather-main>
            </p>
          </div>
        </div>

        <hr>

        <div *ngIf="weatherData">
          <div>{{weatherData | json}}</div>
          <div>{{weatherData.main | json}}</div>
        </div>

<!--
        <div class="container">
          <h3>{{weatherData.name}}</h3>
          <app-weather-details [weatherList]=weatherData.weather></app-weather-details>
        </div>
-->
      </div>
    `,
  styleUrls: ["./weather-page.component.css"]
})
export class WeatherPageComponent implements OnInit {
  public weatherData: IWeather;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  doSubmit(searchValues) {
    console.log("Form submitted! searchValue: ", searchValues);
    console.log("Form submitted! cityName: ", searchValues.value.cityName);
    this.weatherService
      .getWeather(searchValues.value.cityName)
      .subscribe(data => (this.weatherData = data));
  }
}
