import { Component, OnInit, Input } from "@angular/core";

import { IWeatherWeather } from "../model/weather.model";

@Component({
  selector: "app-weather-details",
  templateUrl: "./weather-details.component.html",
  styleUrls: ["./weather-details.component.css"]
})
export class WeatherDetailsComponent implements OnInit {
  @Input() weatherList: IWeatherWeather[];

  constructor() {}

  ngOnInit() {}
}
