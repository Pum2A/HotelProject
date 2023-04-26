import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/images.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




interface HouseInfo {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface ImageData {
  imageBase64: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent {





  public imagePath: string = 'http://localhost:5000/uploads/domZakopane1.jpg';
  public imagePath2: string = 'http://localhost:5000/uploads/domZakopane2.jpg';
  public imagePath3: string = 'http://localhost:5000/uploads/domZakopane3.jpg';
  public imagePath4: string = 'http://localhost:5000/uploads/domZakopane4.jpg';

  house1Price = '350';
  house2Price = '450';
  house3Price = '250';
  house4Price = '150';

  house1Rating = '4.30'
  house2Rating = '5.30'
  house3Rating = '4.90'
  house4Rating = '5.30'
  imageData!: ImageData;
  houseInfo!: HouseInfo;






  constructor(private router: Router) {}

  showHouseDetails(houseNumber: number) {
    this.router.navigate(['/house-details', houseNumber]);
  }






}

