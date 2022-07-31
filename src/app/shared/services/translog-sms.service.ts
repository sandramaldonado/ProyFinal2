import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, Observable, throwError } from 'rxjs';
import { TranslogSMS } from '../models/translogSMS';

@Injectable({
  providedIn: 'root'
})
export class TranslogSmsService {
  apiUrl: string = 'http://localhost:3000/translogSMS';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  setTranslogSMS(smsInfo: any): Observable<TranslogSMS> {
    //console.log(client);
    return this.httpClient.post<TranslogSMS>(`${this.apiUrl}`, 
            JSON.stringify(smsInfo), 
            this.httpOptions).pipe(
            retry(1), catchError(this.handleError));
  }

  validationAccesCode(subscriberId: any, code: any): Observable<TranslogSMS> {
    const addUrlCode = '?code=';
    const addUrlPhone = '&subscriberId=';
    const addUrlState = '&state=0';
    
    return this.httpClient.get(`${this.apiUrl}${addUrlCode}${code}${addUrlPhone}${subscriberId.data}${addUrlState}`).pipe(
              catchError(this.handleError)
            );
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
