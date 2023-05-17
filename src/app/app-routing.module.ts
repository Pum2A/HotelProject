import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RoomlistComponent } from './components/roomlist/roomlist.component';
import { RoomdetailsComponent } from './components/roomdetails/roomdetails.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { FormComponent } from './components/form/form.component';
import { AvaibleRoomsComponent } from './components/avaible-rooms/avaible-rooms.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
  },
  {
    path:'roomlist', component:RoomlistComponent
  },
  {
    path:'avaibleRooms', component:AvaibleRoomsComponent
  },
  {
    path:'roomdetails', component:RoomdetailsComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'house', component:HouseComponent
  },
  {
    path:'house-details/:houseNumber', component: HouseDetailsComponent
  },
  {
    path:'form', component: FormComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
