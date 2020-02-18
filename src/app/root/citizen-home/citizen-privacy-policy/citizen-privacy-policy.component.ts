import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenService } from '../citizen.service';
import { DxFormComponent } from 'devextreme-angular/ui/form';

@Component({
  selector: 'app-citizen-privacy-policy',
  templateUrl: './citizen-privacy-policy.component.html',
  styleUrls: ['./citizen-privacy-policy.component.scss']
})
export class CitizenPrivacyPolicyComponent implements OnInit {

  @ViewChild("privacyForm", { static: false }) privacyForm: DxFormComponent;

  public privacyFormData:  {
    privacyAccept: false
  };

  privacy = '';

  constructor(public cs: CitizenService, private router: Router) { 
    this.onNext = this.onNext.bind(this);
    this.onBack = this.onBack.bind(this);
    
    cs.datenschutzErklaerung.subscribe(data=>{
      this.privacy = data;
    })
  }

  ngOnInit() {
  }

  onNext() {
    var validationResult = this.privacyForm.instance.validate();
    if (validationResult.isValid) {
      this.cs.setDatenschutz(true);
    }
  }

  onBack() {
    this.router.navigate(['appointment'], { state: { back: true } }); 
  }
}


