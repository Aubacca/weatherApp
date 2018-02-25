import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class WeatherService {
  private apiKey: string = undefined;

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any>("/assets/keys/weatherApi.json")
      .subscribe(data => (this.apiKey = data.licenseKey));
  }

  getWeather(cityName: string): Observable<any> {
    console.log("getWeather>cityName=", cityName);
    let options: any = {
      responseType: "json"
    };
    return this.httpClient.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=de&units=metric&appid=${
        this.apiKey
      }`,
      options
    );
  }
}
