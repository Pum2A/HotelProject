import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HousesService } from 'src/app/services/house.service';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  houseReservationForm!: FormGroup;


  selectedHouseId!: number;
  successfulText: boolean = true;




  constructor(private fb: FormBuilder, private contactService:ContactServiceService) { }

  ngOnInit(): void {
    this.houseReservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      about: ['', Validators.required],
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
      about: this.houseReservationForm.get('about')?.value,
    };

    this.contactService.createContact(reservationData).subscribe(
      (response) => {
        console.log('Message send successful: ', response);
        this.houseReservationForm.reset();
      },
      (error) => {
        console.log('Message send failed: ', error);
      }

    );
  }




}
