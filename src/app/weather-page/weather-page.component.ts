import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-weather-page",
  template: `
      <div class="container">
        <form (ngSubmit)="doSubmit(citySearch)" #citySearch="ngForm">
          <span>Name der Stadt für die Wettersuche erfassen.</span>
          <label for="">Stadt:</label>
          <input type="text" name="cityName" ngModel placeholder="Enter name of the city to be searched for..">
          <br>
          <input type="submit" value="Search">
        </form>
      </div>
    `,
  styleUrls: ["./weather-page.component.css"]
})
export class WeatherPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  doSubmit(searchValues) {
    console.log("Form submitted! searchValue: ", searchValues);
    console.log("Form submitted! cityName: ", searchValues.value.cityName);
  }
}
