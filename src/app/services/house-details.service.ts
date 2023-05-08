import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseDetailsService {

  constructor(private httpClient: HttpClient) { }

  getHouses(): Observable<any> {

    return this.httpClient.get('http://localhost:3000/api/houses');

  }

}
