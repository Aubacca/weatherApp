import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ObsWeatherService {
  private _apiKey: string = undefined;

  constructor(private _http: HttpClient) {
    this._http
      // .get<any>(environment.apiUrl + "/assets/keys/weatherApi.json")
      // .get<any>('./assets/keys/weatherApi.json')
      .get<any>(`${environment.assetBaseUrl}/assets/keys/weatherApi.json`)
      .pipe(tap(r => console.log('ObsWeatherService.ctor>License key: ', r)))
      .subscribe(data => (this._apiKey = data.licenseKey));
  }

  getWeather(cityName: string): Observable<ObsWeather> {
    console.log('ObsWeatherService.getWeather>cityName:', cityName);
    const options: Object = { responseType: 'json' };
    //
    return this._http.get<ObsWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=de&units=metric&appid=${
        this._apiKey
      }`,
      options
    );
  }
}
