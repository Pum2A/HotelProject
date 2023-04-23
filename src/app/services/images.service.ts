import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:2121';

  constructor(private http: HttpClient) { }

  getImage(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`, { responseType: 'blob' });
  }
}
