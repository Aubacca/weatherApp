import { Component, Input, OnInit } from "@angular/core";

import { IWeatherMain } from "../model/weather.model";

@Component({
  selector: "app-weather-main",
  templateUrl: "./weather-main.component.html",
  styleUrls: ["./weather-main.component.css"]
})
export class WeatherMainComponent implements OnInit {
  @Input() weatherMain: IWeatherMain;

  constructor() {}

  ngOnInit() {}
}
