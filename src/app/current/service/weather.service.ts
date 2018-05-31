import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpResponse,
  HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { IWeather } from '@app/model/weather.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _apiKey: string = undefined;

  constructor(private _http: HttpClient) {
    this._http
      // .get<any>(environment.apiUrl + "/assets/keys/weatherApi.json")
      // .get<any>('./assets/keys/weatherApi.json')
      .get<any>(`${environment.assetBaseUrl}/assets/keys/weatherApi.json`)
      .subscribe(data => (this._apiKey = data.licenseKey));
  }

  getWeather(cityName: string): Observable<IWeather> {
    console.log('getWeather>cityName=', cityName);
    const options: Object = { responseType: 'json' };
    //
    return this._http.get<IWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=de&units=metric&appid=${
        this._apiKey
      }`,
      options
    );
  }
}
