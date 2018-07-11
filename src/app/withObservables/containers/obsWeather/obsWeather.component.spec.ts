import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsWeatherComponent } from '@app/withObservables/containers/obsWeather/obsWeather.component';

describe('ObsWeatherComponent', () => {
  let component: ObsWeatherComponent;
  let fixture: ComponentFixture<ObsWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObsWeatherComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
