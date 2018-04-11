import { IWeatherWind } from "./../../model/weather.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-wind-detail",
  templateUrl: "./wind-detail.component.html",
  styleUrls: ["./wind-detail.component.css"]
})
export class WindDetailComponent implements OnInit {
  @Input() wind: IWeatherWind;

  constructor() {}

  ngOnInit() {}
}
