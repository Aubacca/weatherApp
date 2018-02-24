import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    console.log("getWeather>cityName=", cityName);
    return this.httpClient.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=de&units=metric&appid=`
    );
  }
}
