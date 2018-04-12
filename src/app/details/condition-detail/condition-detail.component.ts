import { Component, Input, OnInit } from "@angular/core";

import { IWeatherMain } from "../../model/weather.model";

@Component({
  selector: "app-condition-detail",
  templateUrl: "./condition-detail.component.html",
  styleUrls: ["./condition-detail.component.css"]
})
export class ConditionDetailComponent implements OnInit {
  @Input() weatherMain: IWeatherMain;

  constructor() {}

  ngOnInit() {}
}
