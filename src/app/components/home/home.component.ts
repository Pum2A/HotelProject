import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  isFullscreen = false;
  isFullscreen2 = false;
  isFullscreen3 = false;
  isFullscreen4 = false;


  house1Price = '350';
  house2Price = '450';
  house3Price = '250';
  house4Price = '150';

  house1Rating = '4.30'
  house2Rating = '5.30'
  house3Rating = '4.90'
  house4Rating = '5.30'


  toggleFullscreen(){
  this.isFullscreen   = !this.isFullscreen
  }
  toggleFullscreen2(){
  this.isFullscreen2   = !this.isFullscreen2
  }
  toggleFullscreen3(){
  this.isFullscreen3   = !this.isFullscreen3
  }
  toggleFullscreen4(){
  this.isFullscreen4   = !this.isFullscreen4
  }



}
