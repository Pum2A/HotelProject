import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { houseModel } from 'src/app/models/house-model';
import { HouseDetailsService } from 'src/app/services/house-details.service';





interface ImageData {
  imageBase64: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent {

  houses: houseModel[] = [];





  public imagePath: string = 'assets/housePhoto1.webp'
  public imagePath2: string = 'assets/housePhoto2.webp'
  public imagePath3: string = 'assets/housePhoto3.webp'
  public imagePath4: string = 'assets/housePhoto4.webp'










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

