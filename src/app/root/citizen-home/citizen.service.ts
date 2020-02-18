import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Passcode } from 'src/app/models/passcode.model';
import { PersonalDetails } from 'src/app/models/personalDetails.model';

@Injectable()
export class CitizenService {

  public passcode: Passcode;
  public appointment: Appointment;
  public acceptDatenschutz = false;
  public user = new User(12, '', '', 'r.riesner@computerzentrum.de', '');

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

  public get personaldetails(): Observable<User> {
    return new Observable(observer => {
      observer.next(this.user);
      observer.complete();
    });
  }

  public get completeBooking(): Observable<any> {
    return new Observable(observer => {
      observer.next(
        {
          appointment: this.appointment,
          user: this.user
        }
      );
      observer.complete();
    });
  }

  constructor(private router: Router) { }


  public setPasscode(pc: Passcode) {
    this.passcode = pc;
    this.nav(['appointment']);
  }

  selectAppointment(row) {
    this.appointment = row;
    this.nav(['privacypolicy']);
  }

  setDatenschutz(value: boolean) {
    this.acceptDatenschutz = value;
    this.nav(['personaldetails']);
  }

  setPersonaldetails(user: User) {
    this.user = user;
    this.nav(['completebooking']);
  }

  nav(toGo: string[]) {
    this.router.navigate(toGo, { state: { next: true } }); 
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
