export class Reservations {

  constructor(names = "", lastnames = "", dateStart = new Date, dateEnd = new Date
            , activity = "", responsible = "", reservationType = "",
            participant = 0){

    this.names = names;
    this.lastnames = lastnames;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.activity = activity;
    this.responsible = responsible;
    this.reservationType = reservationType;
    this.participants = participant;
  }

  names: string;
  lastnames: string;
  dateStart: Date;
  dateEnd: Date;
  activity: string;
  responsible: string;
  reservationType: string;
  participants: number;
}
