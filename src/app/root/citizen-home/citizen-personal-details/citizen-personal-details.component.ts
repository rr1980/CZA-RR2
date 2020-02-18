import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenService } from '../citizen.service';
import { DxFormComponent } from 'devextreme-angular/ui/form';
import { Observable } from 'rxjs';
import { IAppointmentData } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-citizen-personal-details',
  templateUrl: './citizen-personal-details.component.html',
  styleUrls: ['./citizen-personal-details.component.scss']
})
export class CitizenPersonalDetailsComponent {

  @ViewChild("personalDetailsForm", { static: false }) personalDetailsForm: DxFormComponent;

  public get appointmentData(): Observable<IAppointmentData> {
    return this.cs.get_appointmentData;
  }

  constructor(private cs: CitizenService, private router: Router) {
    this.onNext = this.onNext.bind(this);
    this.onBack = this.onBack.bind(this);
  }


  onNext() {
    var validationResult = this.personalDetailsForm.instance.validate();
    if (validationResult.isValid) {
      this.cs.nav(['completebooking']);
    }
  }

  onBack() {
    this.router.navigate(['privacypolicy'], { state: { back: true } });
  }
}
