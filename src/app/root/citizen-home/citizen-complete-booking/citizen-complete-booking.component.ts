import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenService } from '../citizen.service';

@Component({
  selector: 'app-citizen-complete-booking',
  templateUrl: './citizen-complete-booking.component.html',
  styleUrls: ['./citizen-complete-booking.component.scss']
})
export class CitizenCompleteBookingComponent implements OnInit {

  completeBooking;

  constructor(private router: Router, public cs: CitizenService) {
    this.onNext = this.onNext.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onPrint = this.onPrint.bind(this);

    cs.completeBooking.subscribe(data=>{
      this.completeBooking = data;
    })
  }

  ngOnInit() {
  }

  onNext() {
    this.router.navigate(['passcode']);
  }

  onBack() {
    this.router.navigate(['personaldetails'], { state: { back: true } });
  }

  onPrint(){
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          .confirmation {
            width: 600px;
            height: 450px;
            position: relative;
            left: 50%;
            margin-left: -300px;
            margin-bottom: 50px;
          }
          
          .nameColumn {
            width: 170px;
            height: 40px;
            text-align: right;
            vertical-align: top;
          }
          
          .fillerColumn {
            width: 25px;
          }
          
          .fieldColumn {
            width: 270px;
            text-align: left;
            vertical-align: top;
          }
          
          .button {
            position: relative;
            float: right;
          }
          
          .printSection {
            width: 600px;
            height: 20px;
            position: relative;
            left: 50%;
            margin-left: -300px;
            margin-bottom: 50px;
          }
          </style>
        </head>
        <body>
        <div id="print-section" class="confirmation">
          <table>
            <colgroup>
              <col class="nameColumn">
              <col class="fillerColumn">
              <col class="fieldColumn">
            </colgroup>
            <tr>
              <td colspan="3" ><h1>Terminvereinbarung:</h1></td>
            </tr>
            <tr>
              <td class="nameColumn">Dienstleistung:</td>
              <td></td>
              <td class="fieldColumn">${this.completeBooking.appointment.occasion}<td>
            </tr>
            <tr>
              <td class="nameColumn">Standort:</td>
              <td></td>
              <td class="fieldColumn">
                ${this.completeBooking.appointment.room} <br/>
                ${this.completeBooking.appointment.street} ${this.completeBooking.appointment.no}, ${this.completeBooking.appointment.zipcode} ${this.completeBooking.appointment.city}
              </td>
            </tr>
            <tr>
              <td class="nameColumn">Datum/Uhrezeit:</td>
              <td></td>
              <td class="fieldColumn">${this.completeBooking.appointment.date} / ${this.completeBooking.appointment.time}<td>
            </tr>
            <tr>
              <td class="nameColumn">Hinweis:</td>
              <td></td>
              <td class="fieldColumn">${this.completeBooking.appointment.information}<td>
            </tr>
            <tr>
              <td colspan="2" ><h1>Kontaktdaten:</h1></td>
            </tr>
            <tr>
              <td class="nameColumn">Telefonnummer:</td>
              <td></td>
              <td class="fieldColumn">${this.completeBooking.user.phonenumber}<td>
            </tr>
            <tr>
              <td class="nameColumn">E-Mail Adresse:</td>
              <td></td>
              <td class="fieldColumn">${this.completeBooking.user.email}<td>
            </tr>
            <tr>
            </tr>
          </table>
        </div>
        <script defer>
            function triggerPrint(event) {
              console.log('print');
              window.removeEventListener('load', triggerPrint, false);
              setTimeout(() => {
                window.print();
                // setTimeout(() => window.close(), 0);
              }, 0);
            }
            //window.addEventListener("DOMContentLoaded",triggerPrint,false) 
            window.addEventListener ? window.addEventListener("load",triggerPrint,false) : window.attachEvent && window.attachEvent("onload",triggerPrint);
          </script>
        </body>
      </html>`
    );
     popupWin.document.close();
  }
}
