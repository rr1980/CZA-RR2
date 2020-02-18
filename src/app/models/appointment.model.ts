export class Appointment {
  constructor(
    public id: number,
    public weekday: string,
    public date: string,
    public time: string,
    public performer: string,
    public occasion: string,

    public room: string,
    public facility_id: number,

    public street: string,
    public no: string,
    public zipcode: string,
    public city: string,
    public information: string,
  ) { }
}

export interface IAppointmentData {

  passcode: string;
  birthday: Date;

  //--------

  appointmentId: number;

  weekday: string,
  date: string,
  time: string,
  performer: string,
  occasion: string,

  room: string,
  facility_id: number,

  street: string,
  no: string,
  zipcode: string,
  city: string,
  information: string,
  
  //--------
  
  privacyAccept: boolean;

  userId: number,
  group: string,
  name: string,
  email: string,
  phonenumber: string,
}