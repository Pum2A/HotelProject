import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { houseModel } from 'src/app/models/house-model';
import { HouseDetailsService } from 'src/app/services/house-details.service';


@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent {
  houses: houseModel[] = [];

  test!:number ;







  constructor(private router: Router, private houseDetails: HouseDetailsService) {}

  showHouseDetails(houseNumber: number) {
    this.router.navigate(['/house-details', houseNumber + 1]);
  }

  ngOnInit(): void {
    this.loadHouses();
  }

loadHouses(): void {
this.houseDetails.getHouses().subscribe(contactsServer => this.houses = contactsServer)
}

}
