import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Weather2Service {
  private _apiKey: string = undefined;

  constructor(private _http: HttpClient) {
    this._http
      // .get<any>(environment.apiUrl + "/assets/keys/weatherApi.json")
      // .get<any>('./assets/keys/weatherApi.json')
      .get<any>(`${environment.assetBaseUrl}/assets/keys/weatherApi.json`)
      .pipe(tap(r => console.log('Weather2Service.ctor>License key: ', r)))
      .subscribe(data => (this._apiKey = data.licenseKey));
  }

  getWeather(cityName: string): Observable<RootWeather> {
    console.log('getWeather>cityName=', cityName);
    const options: Object = { responseType: 'json' };
    //
    return this._http.get<RootWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=de&units=metric&appid=${
        this._apiKey
      }`,
      options
    );
  }
}
