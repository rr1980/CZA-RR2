import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment, IAppointmentData } from 'src/app/models/appointment.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CitizenService {

  private _appointmentData: BehaviorSubject<IAppointmentData> = new BehaviorSubject({
    passcode: 'aaaa-aaaa-aaaa',
    birthday: new Date(),
    userId: 12,
    email: 'r.riesner@computerzentrum.de'
  } as IAppointmentData);

  public get get_appointmentData(): Observable<IAppointmentData> {
    return this._appointmentData.asObservable();
  }

  public get get_appointmentDataValue(): IAppointmentData {
    return this._appointmentData.value;
  }

  public get availableAppointment(): Observable<Appointment[]> {
    return new Observable(observer => {
      observer.next(ELEMENT_DATA);
      observer.complete();
    });
  }

  public get datenschutzErklaerung(): Observable<string> {
    return new Observable(observer => {
      observer.next(LOREMIPSUM);
      observer.complete();
    });
  }
  constructor(private router: Router) { 
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
    this.nav(['privacypolicy']);
  }

  nav(toGo: string[]) {
    this.router.navigate(toGo, { state: { next: true } });
  }

  validateFor(path: string): string {

    const aDataVal = this.get_appointmentDataValue;

    if (path === 'passcode') {
      return 'passcode';
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
        return  this.validate_completebooking();
    }

    return 'passcode';
  }

  validate_appointment() {
    if (this.get_appointmentDataValue.passcode && this.get_appointmentDataValue.passcode.length && this.get_appointmentDataValue.birthday) {
      return 'appointment';
    }
    else{
      return 'passcode';
    }
  }

  validate_privacypolicy() {
    if (this.get_appointmentDataValue.appointmentId) {
      return 'privacypolicy';
    }
    else{
      return 'appointment';
    }
  }

  validate_personaldetails() {
    if (this.get_appointmentDataValue.privacyAccept === true) {
      return 'personaldetails';
    }
    else{
      return 'privacypolicy';
    }
  }
  
  validate_completebooking() {
    if (this.get_appointmentDataValue.email && this.get_appointmentDataValue.email.length) {
      return 'completebooking';
    }
    else{
      return 'personaldetails';
    }
  }
}

const LOREMIPSUM = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo';

const ELEMENT_DATA: Appointment[] = [
  new Appointment(1, 'Mo.', '04.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(2, 'Di.', '05.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(3, 'Mi.', '06.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(4, 'Do.', '07.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(5, 'Fr.', '08.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(6, 'Mo.', '11.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(7, 'Di.', '12.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(8, 'Mi.', '13.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(9, 'Do.', '14.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(10, 'Fr.', '15.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(11, 'Mo.', '16.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(12, 'Di.', '17.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(13, 'Mi.', '18.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(14, 'Do.', '19.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(15, 'Fr.', '20.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  new Appointment(16, 'Mo.', '21.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),

  // {id: 3, weekday: 'Mi.', date: '6.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 4, weekday: 'Do.', date: '7.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 5, weekday: 'Fr.', date: '8.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 6, weekday: 'Mo.', date: '11.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 7, weekday: 'Di.', date: '12.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 8, weekday: 'Mi.', date: '13.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 9, weekday: 'Do.', date: '14.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 10, weekday: 'Fr.', date: '15.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 11, weekday: 'Mo.', date: '4.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 12, weekday: 'Di.', date: '5.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 13, weekday: 'Mi.', date: '6.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 14, weekday: 'Do.', date: '7.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 15, weekday: 'Fr.', date: '8.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 16, weekday: 'Mo.', date: '11.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 17, weekday: 'Di.', date: '12.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 18, weekday: 'Mi.', date: '13.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 19, weekday: 'Do.', date: '14.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
  // {id: 20, weekday: 'Fr.', date: '15.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
  // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
];
