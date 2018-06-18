import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherPageComponent } from '@currentWeather/container/weather-page/weather-page.component';
import { Weather2PageComponent } from '@currentWeather/container/weather2-page/weather2-page.component';

const routes: Routes = [
  {
    path: 'current',
    component: WeatherPageComponent
  },
  {
    path: 'current2',
    component: Weather2PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentRoutingModule {}
