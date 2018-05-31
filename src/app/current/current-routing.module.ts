import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherPageComponent } from '@currentWeather/container/weather-page/weather-page.component';

const routes: Routes = [
  {
    path: 'current',
    component: WeatherPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentRoutingModule {}
