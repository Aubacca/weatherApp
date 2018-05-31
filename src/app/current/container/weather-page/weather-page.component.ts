import { Component, OnInit } from '@angular/core';

import { IWeather } from '@app/model/weather.model';
import { WeatherService } from '@currentWeather/service/weather.service';

@Component({
  selector: 'app-weather-page',
  template: `
      <div>
        <hr>
        <form (ngSubmit)="doSubmit(citySearch)" #citySearch="ngForm">
          <label for="cityName">Stadt:</label>
          <input type="text" name="cityName" id="cityName" ngModel placeholder="Enter name of the city to be searched for..">
          <input type="submit" value="Search">
        </form>
        <div *ngIf="weatherData">
          <hr>
          <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header"><h3>{{weatherData.name}}</h3></div>
            <div class="card-body">
              <div class="card-text">
                <app-weather-data [weatherList]=weatherData.weather></app-weather-data>
                <app-condition-detail [weatherMain]=weatherData.main></app-condition-detail>
                <app-wind-detail [wind]=weatherData.wind [visibility]=weatherData.visibility [sys]=weatherData.sys></app-wind-detail>
              </div>
            </div>
          </div>
          <hr>
          <div *ngIf="weatherData">
            <div>{{weatherData | json}}</div>
            <div>{{weatherData.main | json}}</div>
          </div>
        </div>
      </div>
    `,
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {
  public weatherData: IWeather;
  weather: any;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {}

  doSubmit(searchValues) {
    console.log('Form submitted! searchValue:', searchValues);
    console.log('Form submitted! cityName:', searchValues.value.cityName);
    this._weatherService
      .getWeather(searchValues.value.cityName)
      .subscribe(data => (this.weatherData = data));
  }
}
