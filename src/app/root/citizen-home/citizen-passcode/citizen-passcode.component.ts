import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { CitizenService } from '../citizen.service';
import { DxFormComponent } from 'devextreme-angular/ui/form';
import { Passcode } from 'src/app/models/passcode.model';

@Component({
  selector: 'app-citizen-passcode',
  templateUrl: './citizen-passcode.component.html',
  styleUrls: ['./citizen-passcode.component.scss']
})

export class CitizenPasscodeComponent implements OnInit {

  @ViewChild("passcodeForm", { static: false }) passcodeForm: DxFormComponent;
  
  public passcodeFormData: Passcode = {
    passcode: 'aaaaaaaaaaaa',
    birthday: new Date()
  } as Passcode;

  buttonOptions = {
    text: "Absenden",
    useSubmitBehavior: true,
}

  constructor(public ls: LanguageService, private cs: CitizenService) {
    this.onSubmit = this.onSubmit.bind(this);
   }

  ngOnInit() {
  }

  onSubmit(){
    var validationResult = this.passcodeForm.instance.validate();
    if (validationResult.isValid) {
      this.cs.setPasscode(this.passcodeFormData); 
    }
  }

  // async submitHandler() {
  //    this.cs.setPasscode(this.passcode); 
  // }

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
