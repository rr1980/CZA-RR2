import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenService } from '../citizen.service';
import { DxFormComponent } from 'devextreme-angular/ui/form';
import { IAppointmentData } from 'src/app/models/appointment.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-citizen-privacy-policy',
  templateUrl: './citizen-privacy-policy.component.html',
  styleUrls: ['./citizen-privacy-policy.component.scss']
})
export class CitizenPrivacyPolicyComponent {

  @ViewChild("privacyForm", { static: false }) privacyForm: DxFormComponent;

  public get appointmentData(): Observable<IAppointmentData> {
    return this.cs.get_appointmentData;
  }

  public get privacy(): Observable<string> {
    return this.cs.datenschutzErklaerung;
  }

  constructor(public cs: CitizenService, private router: Router) {
    this.onNext = this.onNext.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  onNext() {
    var validationResult = this.privacyForm.instance.validate();
    if (validationResult.isValid) {
      this.cs.nav(['citizen/personaldetails']);
    }
  }

  onBack() {
    this.router.navigate(['citizen/appointment'], { state: { back: true } });
  }
}


