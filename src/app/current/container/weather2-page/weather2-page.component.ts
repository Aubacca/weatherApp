import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Weather2Service } from '@currentWeather/service/weather2.service';

@Component({
  selector: 'app-weather2-page',
  templateUrl: './weather2-page.component.html',
  styleUrls: ['./weather2-page.component.css']
})
export class Weather2PageComponent implements OnInit {
  public weatherData$: Observable<RootWeather>;

  constructor(private _weatherService: Weather2Service) {}

  ngOnInit() {
    setTimeout(() => {
      this.weatherData$ = this._weatherService.getWeather('Basel');
    }, 5);
  }
}
