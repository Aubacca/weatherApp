import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObsWeatherComponent } from '@app/withObservables/containers/obsWeather/obsWeather.component';

const routes: Routes = [
  {
    path: 'obsWeather',
    component: ObsWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithObservablesRoutingModule {}
