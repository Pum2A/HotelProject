import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

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
  private urlSolo = 'http://localhost:3000';

  // house by id

  getHouseById(id: string): Observable<House> {
    return this.http.get<House>(`${this.url}/${id}`);
  }


  // information about house
  getHouseInfo(houseNumber: number): Observable<any> {
    const url = `${this.url}${houseNumber}`;
    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.log(`Błąd pobierania informacji dla domku ${houseNumber}: `, error);
        return throwError(error);
      })
    );
  }

  // creating reservation

  createReservation(houseId: number, reservationData: any): Observable<any> {
    const url = `${this.urlSolo}/api/reservations/${houseId}`;
    return this.http.post(url, reservationData);
  }

  // getting details about house

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
