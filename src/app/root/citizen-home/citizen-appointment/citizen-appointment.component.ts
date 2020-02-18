import { Component, OnInit } from '@angular/core';
import { CitizenService } from '../citizen.service';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-citizen-appointment',
  templateUrl: './citizen-appointment.component.html',
  styleUrls: ['./citizen-appointment.component.scss']
})
export class CitizenAppointmentComponent implements OnInit {


  dataSource: Appointment[];

  constructor( private cs: CitizenService) {
    cs.availableAppointment.subscribe(aa=>{
      this.dataSource = aa;
    })
   }

  ngOnInit() {
  }

  selectAppointment(row) {
     this.cs.selectAppointment(row);
  }
}
