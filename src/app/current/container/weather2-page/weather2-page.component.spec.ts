import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather2PageComponent } from './weather2-page.component';

describe('Weather2PageComponent', () => {
  let component: Weather2PageComponent;
  let fixture: ComponentFixture<Weather2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
