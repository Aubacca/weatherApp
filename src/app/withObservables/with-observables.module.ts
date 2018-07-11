import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithObservablesRoutingModule } from './with-observables-routing.module';

import { ObsWeatherComponent } from '@app/withObservables/containers/obsWeather/obsWeather.component';
import { CoordComponent } from './components/coord/coord.component';
import { MainComponent } from './components/main/main.component';
import { SysComponent } from './components/sys/sys.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WindComponent } from './components/wind/wind.component';

@NgModule({
  imports: [CommonModule, WithObservablesRoutingModule],
  declarations: [
    ObsWeatherComponent,
    CoordComponent,
    MainComponent,
    SysComponent,
    WeatherComponent,
    WindComponent
  ]
})
export class WithObservablesModule {}
