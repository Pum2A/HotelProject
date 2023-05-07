import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Reservation } from '../models/reservation/reservation.module';

export interface House {
  id: number;
  name: string;
  description: string;
  price: string;
  image_id: string;
  occupied: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/api/house-info/';
  private urlReservaton = 'http://localhost:3000/api/reservations';

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.url);
  }

  getHouseById(id: string): Observable<House> {
    return this.http.get<House>(`${this.url}/${id}`);
  }

  getHouseInfo(houseNumber: number): Observable<any> {
    const url = `${this.url}${houseNumber}`;
    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.log(`Błąd pobierania informacji dla domku ${houseNumber}: `, error);
        return throwError(error);
      })
    );
  }

  createReservation(reservationData: any): Observable<any> {
    return this.http.post(`${this.urlReservaton}`, reservationData);
  }

  getHouseDetails(id: number): Observable<House> {
    return this.http.get<House>(`${this.url}${id}`).pipe(
      tap((house: House) => {
        if (house.occupied) {
          house.occupied = true;
        } else {
          house.occupied = false;
        }
      })
    );
  }



}
