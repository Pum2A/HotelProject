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
  button: any;
  showHouseDetails(houseNumber: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:5000/api/house-info/';

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
