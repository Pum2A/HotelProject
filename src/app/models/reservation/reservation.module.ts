import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Reservation {
  name: string;
  email: string;
  phone: string;
  checkIn: Date;
  checkOut: Date;
  adults: number;
  children: number;
  message: string;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
