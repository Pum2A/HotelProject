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
