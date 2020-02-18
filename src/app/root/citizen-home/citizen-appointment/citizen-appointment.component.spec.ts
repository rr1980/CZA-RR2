import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenAppointmentComponent } from './citizen-appointment.component';

describe('CitizenAppointmentComponent', () => {
  let component: CitizenAppointmentComponent;
  let fixture: ComponentFixture<CitizenAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
