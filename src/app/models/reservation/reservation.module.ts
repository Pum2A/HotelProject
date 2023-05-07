import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Reservation {
  houseId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  date: Date;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
