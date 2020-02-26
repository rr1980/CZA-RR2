import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment, IAppointmentData } from 'src/app/models/appointment.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/service/api/api.service';
import { Passcode } from 'src/app/models/passcode.model';

@Injectable()
export class CitizenService {

  private _appointmentData: BehaviorSubject<IAppointmentData> = new BehaviorSubject({
    isCheckedIn: false,
    email: 'r.riesner@computerzentrum.de'
  } as IAppointmentData);

  public get get_appointmentData(): Observable<IAppointmentData> {
    return this._appointmentData.asObservable();
  }

  public get get_appointmentDataValue(): IAppointmentData {
    return this._appointmentData.value;
  }

  public get availableAppointment(): Observable<Appointment[]> {
    return this.apiService.citizen_availableAppointment(this.get_appointmentDataValue.userId);
  }

  public get datenschutzErklaerung(): Observable<string> {
    return new Observable(observer => {
      observer.next(LOREMIPSUM);
      observer.complete();
    });
  }

  constructor(private router: Router, private apiService: ApiService) {
  }

  set_passcode(passcodeFormData: Passcode) {
    this.apiService.citizen_passcode(passcodeFormData).subscribe(response => {

      let ad = {
        isCheckedIn: false,
        userId: response.user.id,
        email: 'r.riesner@computerzentrum.de'
      } as IAppointmentData;

      
      this._appointmentData.next(ad);

      this.nav(['citizen/appointment']);
    });
  }

  selectAppointment(appointment: Appointment) {
    const ad = this._appointmentData.value;

    ad.appointmentId = appointment.id;
    ad.weekday = appointment.weekday;
    ad.date = appointment.date;
    ad.time = appointment.time;
    ad.performer = appointment.performer;
    ad.occasion = appointment.occasion;
    ad.room = appointment.room;
    ad.facility_id = appointment.facility_id;
    ad.street = appointment.street;
    ad.no = appointment.no;
    ad.zipcode = appointment.zipcode;
    ad.city = appointment.city;
    ad.information = appointment.information;

    this._appointmentData.next(ad);
    this.nav(['citizen/privacypolicy']);
  }

  finish() {
    this.apiService.citizen_finish(this.get_appointmentDataValue).subscribe(response => {
      this._appointmentData.next(response.appointment);
      this.nav(['citizen/confirmation']);
    });
  }

  nav(toGo: string[]) {
    this.router.navigate(toGo, { state: { next: true } });
  }

  validateFor(path: string): string {

    const aDataVal = this.get_appointmentDataValue;

    if (path === 'passcode') {
      return 'citizen/passcode';
    }
    else if (path === 'appointment') {
      return this.validate_appointment();
    }
    else if (path === 'privacypolicy') {
      return this.validate_privacypolicy();
    }
    else if (path === 'personaldetails') {
      return this.validate_personaldetails();
    }
    else if (path === 'completebooking') {
      return this.validate_completebooking();
    }
    else if (path === 'confirmation') {
      return this.validate_confirmation();
    }

    return 'citizen/passcode';
  }

  validate_appointment() {
    if (!this.get_appointmentDataValue.isCheckedIn && this.get_appointmentDataValue.userId) {
      return 'citizen/appointment';
    }
    else {
      return 'citizen/passcode';
    }
  }

  validate_privacypolicy() {
    if (!this.get_appointmentDataValue.isCheckedIn && this.get_appointmentDataValue.appointmentId
      && this.get_appointmentDataValue.userId) {
      return 'citizen/privacypolicy';
    }
    else {
      return 'citizen/appointment';
    }
  }

  validate_personaldetails() {
    if (!this.get_appointmentDataValue.isCheckedIn && this.get_appointmentDataValue.privacyAccept === true
      && this.get_appointmentDataValue.appointmentId
      && this.get_appointmentDataValue.userId) {
      return 'citizen/personaldetails';
    }
    else {
      return 'citizen/privacypolicy';
    }
  }

  validate_completebooking() {
    if (!this.get_appointmentDataValue.isCheckedIn && this.get_appointmentDataValue.email && this.get_appointmentDataValue.email.length
      && this.get_appointmentDataValue.privacyAccept === true
      && this.get_appointmentDataValue.appointmentId
      && this.get_appointmentDataValue.userId) {
      return 'citizen/completebooking';
    }
    else {
      return 'citizen/personaldetails';
    }
  }

  validate_confirmation() {
    if (this.get_appointmentDataValue.isCheckedIn && this.get_appointmentDataValue.email && this.get_appointmentDataValue.email.length
      && this.get_appointmentDataValue.privacyAccept === true
      && this.get_appointmentDataValue.appointmentId
      && this.get_appointmentDataValue.userId) {
      return 'citizen/confirmation';
    }
    else {
      return 'citizen/completebooking';
    }
  }
}

const LOREMIPSUM = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo';
