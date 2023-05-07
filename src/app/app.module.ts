import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RoomlistComponent } from './components/roomlist/roomlist.component';
import { RoomdetailsComponent } from './components/roomdetails/roomdetails.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationlistComponent } from './components/reservationlist/reservationlist.component';
import { ReservationdetailsComponent } from './components/reservationdetails/reservationdetails.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseComponent } from './components/house/house.component';
import { HousesService } from './services/house.service';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RoomlistComponent,
    RoomdetailsComponent,
    ReservationComponent,
    ReservationlistComponent,
    ReservationdetailsComponent,
    AdminComponent,
    ContactComponent,
    FooterComponent,
    HouseComponent,
    HouseDetailsComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    HousesService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
