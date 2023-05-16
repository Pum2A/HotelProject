import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/api/house-info/';
  private urlSolo = 'http://localhost:3000';






  createContact(reservationData: any): Observable<any> {
    const url = `${this.urlSolo}/api/contact`;
    return this.http.post(url, reservationData);
  }



}
