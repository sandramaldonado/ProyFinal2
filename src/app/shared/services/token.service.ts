import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, Observable, throwError } from 'rxjs';
import { Autenticar } from '../models/Autenticar';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  urToken = "http://omega.10.45.57.104.sslip.io/auth/login";
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  gettoken(): Observable<Autenticar> {
    return this.httpClient.post<Autenticar>(`${this.urToken}`, 
            JSON.stringify({"username":"atcpru1","password":"V1tZKv0LyinCFc3QPaH7Iw=="}), 
            this.httpOptions).pipe(
            retry(1), catchError(this.handleError));
  }
  
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
