import { Component } from '@angular/core';
import { CitizenService } from '../citizen.service';
import { Appointment } from 'src/app/models/appointment.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-citizen-appointment',
  templateUrl: './citizen-appointment.component.html',
  styleUrls: ['./citizen-appointment.component.scss']
})
export class CitizenAppointmentComponent {

  public get dataSource(): Observable<Appointment[]> {
    return this.cs.availableAppointment;
  }

  constructor(private cs: CitizenService) { }

  selectAppointment(row) {
    this.cs.selectAppointment(row);
  }
}
