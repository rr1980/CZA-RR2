import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenService } from '../citizen.service';
import { DxFormComponent } from 'devextreme-angular/ui/form';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-citizen-personal-details',
  templateUrl: './citizen-personal-details.component.html',
  styleUrls: ['./citizen-personal-details.component.scss']
})
export class CitizenPersonalDetailsComponent implements OnInit {

  @ViewChild("personalDetailsForm", { static: false }) personalDetailsForm: DxFormComponent;

  personalDetailsFormData;

  constructor(private cs: CitizenService, private router: Router){
    this.onNext = this.onNext.bind(this);
    this.onBack = this.onBack.bind(this);

    cs.personaldetails.subscribe(data=>{
      this.personalDetailsFormData = data;
    })
  }
  

  onNext() {
    var validationResult = this.personalDetailsForm.instance.validate();
    if (validationResult.isValid) {
      this.cs.setPersonaldetails(this.personalDetailsFormData);
    }
  }

  onBack() {
    this.router.navigate(['privacypolicy'], { state: { back: true } }); 
  }

  ngOnInit() {
  }
}
