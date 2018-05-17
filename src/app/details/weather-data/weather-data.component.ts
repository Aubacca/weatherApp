import { Component, OnInit, Input } from '@angular/core';

import { IWeatherWeather } from '../../model/weather.model';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  @Input() weatherList: IWeatherWeather[];

  constructor() {}

  ngOnInit() {}
}
