import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservations } from '../models/reservation/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservation: Reservations;
  reservations: Reservations[] = [];

  readonly URL_API = 'http://192.168.100.20:3000/api/lab/reservation';

  constructor(private http:HttpClient) {
    this.reservation = new Reservations();
  }

  getReservationsUser(email: string){
    return this.http.get(this.URL_API + `/${email}`);
  }

  postReservation(reservation: Reservations){
    return this.http.post(this.URL_API + "/post", reservation);
  }
}
