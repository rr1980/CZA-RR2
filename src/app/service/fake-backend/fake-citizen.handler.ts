import { HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { PasscodeResponse } from 'src/app/models/passcode.model';
import { User } from 'src/app/models/user.model';
import { ServerResponse } from '../api/server-response';
import { Appointment, IAppointmentData, AppointmentFinishResponse } from 'src/app/models/appointment.model';


export class FakeCitizenHandler {

    handle(request: HttpRequest<any>, bodyDe: any): Observable<HttpEvent<any>> {
        const req = JSON.parse(bodyDe.data);

        if (req.hasOwnProperty('passcode')) {
            return this.passcode();
        }
        else if (req.hasOwnProperty('userId') && !req.hasOwnProperty('isCheckedIn')) {
            return this.availableAppointment();
        }
        else if (req.hasOwnProperty('isCheckedIn')) {
            return this.finish(req);
        }
    }

    passcode(): Observable<HttpEvent<any>> {
        const serverResponse = ServerResponse.getInstance({"status":"Ok","data": JSON.stringify({
            user: new User(12,'','','','')
        } as PasscodeResponse)});
        return this.ok(btoa(JSON.stringify(serverResponse)));
    }

    availableAppointment(): Observable<HttpEvent<any>> {
        const serverResponse = ServerResponse.getInstance({"status":"Ok","data": JSON.stringify(ELEMENT_DATA)});
        return this.ok(btoa(JSON.stringify(serverResponse)));
    }

    finish(appointment: IAppointmentData): Observable<HttpEvent<any>> {
        
        appointment.isCheckedIn = true;
        
        const serverResponse = ServerResponse.getInstance({"status":"Ok","data": JSON.stringify({
            appointment: appointment
        } as AppointmentFinishResponse)});
        return this.ok(btoa(JSON.stringify(serverResponse)));
    }

    ok(bodyData?) {
        // tslint:disable-next-line: deprecation
        return of(new HttpResponse({ status: 200, body: bodyData }));
    }

    unauthorized() {
        return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }
}




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
  ];
  

//   const ELEMENT_DATA: Appointment[] = [
//     new Appointment(1, 'Mo.', '04.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(2, 'Di.', '05.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(3, 'Mi.', '06.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(4, 'Do.', '07.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(5, 'Fr.', '08.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(6, 'Mo.', '11.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(7, 'Di.', '12.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(8, 'Mi.', '13.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(9, 'Do.', '14.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(10, 'Fr.', '15.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(11, 'Mo.', '16.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(12, 'Di.', '17.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(13, 'Mi.', '18.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(14, 'Do.', '19.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(15, 'Fr.', '20.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
//     new Appointment(16, 'Mo.', '21.05.2020 ', '9:00', 'Herr Bauer', 'Schuleingangsuntersuchung (Berlin)', 'A113', null, 'Hauptstraße', '7', '10365', 'Berlin', 'Bitte bringen Sie Ihren Ausweis mit'),
  
//     // {id: 3, weekday: 'Mi.', date: '6.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 4, weekday: 'Do.', date: '7.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 5, weekday: 'Fr.', date: '8.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 6, weekday: 'Mo.', date: '11.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 7, weekday: 'Di.', date: '12.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 8, weekday: 'Mi.', date: '13.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 9, weekday: 'Do.', date: '14.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 10, weekday: 'Fr.', date: '15.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 11, weekday: 'Mo.', date: '4.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 12, weekday: 'Di.', date: '5.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 13, weekday: 'Mi.', date: '6.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 14, weekday: 'Do.', date: '7.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 15, weekday: 'Fr.', date: '8.05.2020 ', time: '9:00', performer: 'Herr Bauer', occasion: 'Schuleingangsuntersuchung (Berlin)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 16, weekday: 'Mo.', date: '11.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 17, weekday: 'Di.', date: '12.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 18, weekday: 'Mi.', date: '13.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 19, weekday: 'Do.', date: '14.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//     // {id: 20, weekday: 'Fr.', date: '15.05.2020', time: '9:00', performer: 'Frau Müller', occasion: 'Schuleingangsuntersuchung (Strausberg)',
//     // room: 'A113', street: 'Hauptstraße', no: '7', zipcode: '10365', city: 'Berlin', information: 'Bitte bringen Sie Ihren Ausweis mit'} as Appointment,
//   ];