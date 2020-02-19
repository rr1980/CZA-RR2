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

  dataSource: Appointment[] = [];

  constructor(private cs: CitizenService) {
    this.cs.availableAppointment.subscribe(r=> {
      this.dataSource = r;
    });
   }

  selectAppointment(row) {
    this.cs.selectAppointment(row);
  }
}
