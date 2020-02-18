import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenCompleteBookingComponent } from './citizen-complete-booking.component';

describe('CitizenCompleteBookingComponent', () => {
  let component: CitizenCompleteBookingComponent;
  let fixture: ComponentFixture<CitizenCompleteBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenCompleteBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenCompleteBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
