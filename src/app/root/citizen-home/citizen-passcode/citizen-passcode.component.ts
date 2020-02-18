import { Component, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { CitizenService } from '../citizen.service';
import { DxFormComponent } from 'devextreme-angular/ui/form';
import { IAppointmentData } from 'src/app/models/appointment.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-citizen-passcode',
  templateUrl: './citizen-passcode.component.html',
  styleUrls: ['./citizen-passcode.component.scss']
})

export class CitizenPasscodeComponent {

  @ViewChild("passcodeForm", { static: false }) passcodeForm: DxFormComponent;

  public get appointmentData(): Observable<IAppointmentData> {
    return this.cs.get_appointmentData;
  }

  buttonOptions = {
    text: "Absenden",
    useSubmitBehavior: true,
  }

  constructor(public ls: LanguageService, private cs: CitizenService) {
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    var validationResult = this.passcodeForm.instance.validate();
    if (validationResult.isValid) {
      this.cs.nav(['appointment']);
    }
  }

  // public modelChange(str: string): void {
  //   if (str != null) {
  //     if (str.length === 4 || str.length === 9) {
  //       this.passcode = str + '-';
  //     } else if ((str.length === 6 || str.length === 11) && str.endsWith('-')) {
  //       this.passcode = str.substr(0, str.length - 1);
  //     } else {
  //       this.passcode = str;
  //     }
  //   }
  // }
}
