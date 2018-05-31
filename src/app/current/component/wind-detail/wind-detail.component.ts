// import {
//   IWeatherWind,
//   IWeatherMain,
//   IWeather,
//   IWeatherSys
// } from './../../model/weather.model';
import { Component, OnInit, Input } from '@angular/core';
import { IWeatherWind, IWeatherSys } from '@app/model/weather.model';

@Component({
  selector: 'app-wind-detail',
  templateUrl: './wind-detail.component.html',
  styleUrls: ['./wind-detail.component.css']
})
export class WindDetailComponent implements OnInit {
  @Input() wind: IWeatherWind;
  @Input() visibility: number;
  @Input() sys: IWeatherSys;

  private timeOption = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  constructor() {}

  ngOnInit() {}

  get sunrise() {
    return new Date(this.sys.sunrise * 1000).toLocaleDateString(
      'de-CH',
      this.timeOption
    );
  }

  get sunset() {
    return new Date(this.sys.sunset * 1000).toLocaleDateString(
      'de-CH',
      this.timeOption
    );
  }
}
