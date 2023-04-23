import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

  name = '';
  email = '';
  phone = '';
  checkIn = new Date();
  checkOut = new Date();
  adults = 0;
  children = 0;
  message = '';



  constructor(private http: HttpClient) {}

  submitReservation() {
    const reservationData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      adults: this.adults,
      children: this.children,
      message: this.message
    };

    this.http.post('/api/reservations', reservationData).subscribe(
      response => {
        console.log('Reservation submitted successfully!');
      },
      error => {
        console.log('Error submitting reservation:', error);
      }
    );
  }

}
