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
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onSubmit() {
    var validationResult = this.passcodeForm.instance.validate();
    if (validationResult.isValid) {
      this.cs.nav(['appointment']);
    }
  }

  onKeyUp(e){
    var text = this.passcodeForm.instance.getEditor('passcode').option('text');
    this.passcodeForm.instance.updateData("passcode", this.modelChange(text));
  }

  private modelChange(str: string): string {
    let newStr='';
    
    if (str != null) {
      if (str.length === 4 || str.length === 9) {
        newStr = str + '-';
      } else if ((str.length === 6 || str.length === 11) && str.endsWith('-')) {
        newStr = str.substr(0, str.length - 1);
      } else {
        newStr = str;
      }
    }

    return newStr;
  }
}
