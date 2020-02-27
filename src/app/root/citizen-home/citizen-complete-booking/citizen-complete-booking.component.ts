import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenService } from '../citizen.service';
import { IAppointmentData } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-citizen-complete-booking',
  templateUrl: './citizen-complete-booking.component.html',
  styleUrls: ['./citizen-complete-booking.component.scss']
})
export class CitizenCompleteBookingComponent {

  public get appointmentDataValue(): IAppointmentData {
    return this.cs.get_appointmentDataValue;
  }
  constructor(private router: Router, public cs: CitizenService) {
    this.onNext = this.onNext.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  onNext() {
    this.cs.finish();
  }

  onBack() {
    this.router.navigate(['citizen/personaldetails'], { state: { back: true } });
  }

  get showSmall(): boolean {
    if (this.screenWidth > 800) {
      return false;
    }
    else {
      return true;
    }
  }

  get screenWidth(): number {
    return window.innerWidth;
  }
}
