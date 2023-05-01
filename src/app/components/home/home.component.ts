import { Component } from '@angular/core';
import { Router } from '@angular/router';






interface ImageData {
  imageBase64: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent {





  public imagePath: string = 'assets/housePhoto1.webp'
  public imagePath2: string = 'assets/housePhoto2.webp'
  public imagePath3: string = 'assets/housePhoto3.webp'
  public imagePath4: string = 'assets/housePhoto4.webp'


  house1Price = '350';
  house2Price = '450';
  house3Price = '250';
  house4Price = '150';

  house1Rating = '4.30'
  house2Rating = '5.30'
  house3Rating = '4.90'
  house4Rating = '5.30'







  constructor(private router: Router) {}

  showHouseDetails(houseNumber: number) {
    this.router.navigate(['/house-details', houseNumber]);
  }








}

