import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservations } from 'src/app/models/reservation/reservations';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  reservation: Reservations;
  reservationForm!: FormGroup;

  constructor(private reservationSerivice: ReservationService,
    private _builder: FormBuilder) {
    this.reservation = new Reservations();
    this.reservationForm = this._builder.group({
      names: [''],
      lastnames: [''],
      dateStart: [''],
      dateEnd: [''],
      activity: [''],
      responsible: [''],
      reservationType: [''],
      participants: ['']
    });
  }

  ngOnInit(): void {
  }

  sendReservation(values: any){
    this.reservationSerivice.postReservation(values).subscribe(
      res => {
        console.log('Enviado');
        window.location.reload();
      },
      err => {
        console.log(err);
      })
  }

  resetForm(){
    this.reservationForm.setValue({
      type: '',
      scope: '',
      subject: '',
      desc:'',
      urlimg:''
    })
  }

}
