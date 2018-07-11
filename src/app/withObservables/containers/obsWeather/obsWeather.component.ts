import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ObsWeatherService } from '@app/withObservables/service/obsWeather.service';

@Component({
  selector: 'app-obs-weather',
  templateUrl: './obsWeather.component.html',
  styleUrls: ['./obsWeather.component.css']
})
export class ObsWeatherComponent implements OnInit {
  public weatherData$: Observable<ObsWeather>;

  constructor(private _weatherService: ObsWeatherService) {}

  ngOnInit() {
    setTimeout(() => {
      this.weatherData$ = this._weatherService.getWeather('Basel');
    }, 5);
  }
}
