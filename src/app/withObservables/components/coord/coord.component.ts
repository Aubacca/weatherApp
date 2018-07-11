import { Component, OnInit, Input } from '@angular/core';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'app-coord',
  templateUrl: './coord.component.html',
  styleUrls: ['./coord.component.css']
})
export class CoordComponent implements OnInit {
  @Input() data$: Observable<ObsWeather>;
  @Input() coord$: Observable<Coord>;
  coord: Coord;
  constructor() {}

  ngOnInit() {
    // this.data$.subscribe(data => (this.coord = data.coord));
  }
}
