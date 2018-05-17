import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpEvent,
  HttpResponse,
  HttpParams
} from "@angular/common/http";

import { Observable } from "rxjs";

import { IWeather } from "../model/weather.model";
import { environment } from "../../environments/environment";

@Injectable()
export class WeatherService {
  private _apiKey: string = undefined;

  constructor(private _http: HttpClient) {
    this._http
      .get<any>(environment.apiUrl + "/assets/keys/weatherApi.json")
      // .get<any>("./assets/keys/weatherApi.json")
      .subscribe(data => (this._apiKey = data.licenseKey));
  }

  getWeather(cityName: string): Observable<IWeather> {
    console.log("getWeather>cityName=", cityName);
    let options: Object = { responseType: "json" };
    //
    return this._http.get<IWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=de&units=metric&appid=${
        this._apiKey
      }`,
      options
    );
  }
}
