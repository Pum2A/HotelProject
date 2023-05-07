import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HousesService } from 'src/app/services/house.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  houseReservationForm!: FormGroup;


  selectedHouseId!: number;


  housesList = [
    {id: 1, name: 'First House'},
    {id: 2, name: 'Second House'},
    {id: 3, name: 'Third House'},
    {id: 4, name: 'Fourth House'}
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
      created_at: new Date().toISOString(), // dodajemy datę utworzenia
    };

    this.housesService.createReservation(this.selectedHouseId, reservationData).subscribe(
      (response) => {
        console.log('Reservation successful: ', response);
        this.houseReservationForm.reset();
      },
      (error) => {
        console.log('Reservation failed: ', error);
      }

    );
  }


}

