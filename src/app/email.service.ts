import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  httpOptions = { headers: this.headers };
    // please dont abuse this token - cba to create a backend for this
  // url = "https://formspree.io/f/xyyvwrle"
  url = "https://formspree.io/f/xrgdqnyw"

  constructor(private http: HttpClient) { }

  send(body: any): Observable<any> {
    return this.http.post<any>(this.url, body, this.httpOptions)
  }
}
