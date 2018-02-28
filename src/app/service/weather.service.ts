import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpEvent,
  HttpResponse,
  HttpParams
} from "@angular/common/http";

import { Observable } from "rxjs";

import { IWeather } from "../model/weather.model";

@Injectable()
export class WeatherService {
  private apiKey: string = undefined;

  constructor(private http: HttpClient) {
    this.http
      .get<any>("/assets/keys/weatherApi.json")
      .subscribe(data => (this.apiKey = data.licenseKey));
  }

  getWeather(cityName: string): Observable<IWeather> {
    console.log("getWeather>cityName=", cityName);
    let options: Object = { responseType: "json" };
    //
    return this.http.get<IWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=de&units=metric&appid=${
        this.apiKey
      }`,
      options
    );
  }
}
