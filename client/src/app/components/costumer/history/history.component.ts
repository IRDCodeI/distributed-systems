import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservations } from 'src/app/models/reservation/reservations';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  reservations: Reservations[] = [];
  email: any;

  constructor(private reservationService: ReservationService) {

  }

  ngOnInit(): void {
    this.getHistoryUser();
  }

  getHistoryUser(){
    this.email = localStorage.getItem('email');
    this.reservationService.getReservationsUser(this.email).subscribe( res =>{
      this.reservations = res as Reservations[];
    })
  }

}
