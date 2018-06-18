import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CurrentRoutingModule } from './current-routing.module';
import { WeatherPageComponent } from '@currentWeather/container/weather-page/weather-page.component';
import { WindDirectionPipe } from '@currentWeather/utils/wind-direction.pipe';
import { WeatherDataComponent } from '@currentWeather/component/weather-data/weather-data.component';
import { WindDetailComponent } from '@currentWeather/component/wind-detail/wind-detail.component';
import { ConditionDetailComponent } from '@currentWeather/component/condition-detail/condition-detail.component';
import { Weather2PageComponent } from '@currentWeather/container/weather2-page/weather2-page.component';

@NgModule({
  imports: [CommonModule, FormsModule, CurrentRoutingModule, HttpClientModule],
  declarations: [
    ConditionDetailComponent,
    WeatherPageComponent,
    WeatherDataComponent,
    WindDirectionPipe,
    WindDetailComponent,
    Weather2PageComponent
  ]
})
export class CurrentModule {}
