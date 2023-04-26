import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface House {
  id: number;
  name: string;
  description: string;
  price: string;
  image_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class HousesService {
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
    return this.http.get<any>(`${this.url}${houseNumber}`);
  }
}
