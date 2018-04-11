import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDetailComponent } from './wind-detail.component';

describe('WindDetailComponent', () => {
  let component: WindDetailComponent;
  let fixture: ComponentFixture<WindDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
