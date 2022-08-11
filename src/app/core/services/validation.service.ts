import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Client } from '@models/Client';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  apiUrl: string = `${environment.ClientValidationUrl}`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getClient(dni: any, phone: any): Observable<any> {
    const addUrlDni = '?dni=';
    const addUrlPhone = '&subscriberId=';
    return this.httpClient.get(`${this.apiUrl}${addUrlDni}${dni}${addUrlPhone}${phone}`).pipe(
      catchError(this.handleError)
    );
  }

  getClientList(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  setClient(client: any): Observable<Client> {
    //console.log(client);
    return this.httpClient.post<Client>(`${this.apiUrl}`, 
            JSON.stringify(client), 
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
