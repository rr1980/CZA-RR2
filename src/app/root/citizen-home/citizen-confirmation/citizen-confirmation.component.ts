import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { User } from 'src/app/models/user.model';
import { CitizenService } from '../citizen.service';

@Component({
  selector: 'app-citizen-confirmation',
  templateUrl: './citizen-confirmation.component.html',
  styleUrls: ['./citizen-confirmation.component.scss']
})
export class CitizenConfirmationComponent implements OnInit {

  get appointment(): Appointment {
    return this.cs.appointment;
  }

  get user(): User {
    return this.cs.user;
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public cs: CitizenService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
    });
  }

  async print() {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
