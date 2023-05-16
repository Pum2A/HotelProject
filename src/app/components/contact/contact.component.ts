import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HousesService } from 'src/app/services/house.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  houseReservationForm!: FormGroup;


  selectedHouseId!: number;
  successfulText: boolean = true;


  housesList = [
    {id: 1, name: 'House nr 1'},
    {id: 2, name: 'House nr 2'},
    {id: 3, name: 'House nr 3'},
    {id: 4, name: 'House nr 4'},
    {id: 5, name: 'House nr 5'},
    {id: 6, name: 'House nr 6'},
    {id: 7, name: 'House nr 7'},
    {id: 8, name: 'House nr 8'},
  ];


  constructor(private fb: FormBuilder, private housesService: HousesService) { }

  ngOnInit(): void {
    this.houseReservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      guests: ['', Validators.required],
      house_id: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.houseReservationForm.invalid) {
      return;
    }

    const reservationData = {
      name: this.houseReservationForm.get('name')?.value,
      email: this.houseReservationForm.get('email')?.value,
      phone: this.houseReservationForm.get('phone')?.value,
      check_in: this.houseReservationForm.get('check_in')?.value,
      check_out: this.houseReservationForm.get('check_out')?.value,
      guests: this.houseReservationForm.get('guests')?.value,
      house_id: this.selectedHouseId, // wybieramy ID domu z pola wyboru
    };

    this.housesService.createReservation(this.selectedHouseId, reservationData).subscribe(
      (response) => {
        console.log('Reservation successful: ', response);
        this.houseReservationForm.reset();
        // successfullText(){
        //   this.successfulText = !this.successfulText;
        // }
      },
      (error) => {
        console.log('Reservation failed: ', error);
      }

    );
  }




}
