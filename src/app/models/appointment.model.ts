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
