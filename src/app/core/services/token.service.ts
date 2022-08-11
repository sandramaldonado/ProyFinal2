import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, Observable, throwError } from 'rxjs';
import { Autenticar } from '@models/Autenticar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  //urToken = "https://omega.devnt.ssidevops.com/auth/login";
  urToken : string = `${environment.SSIAuthApiUrl}`;

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  gettoken(): Observable<Autenticar> {
    /*
    username: "landing", 
password: "3X4E+U7d1m1XprRamjfaRg=="
     */
    return this.httpClient.post<Autenticar>(`${this.urToken}`, 
            JSON.stringify({
              "username": "landing",
              "password": "3X4E+U7d1m1XprRamjfaRg=="
          }), 
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
