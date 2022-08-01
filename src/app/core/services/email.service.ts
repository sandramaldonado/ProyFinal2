import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Client } from '@models/Client';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url: string = 'http://localhost:3000/planPostpagoBack/sendEmail';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  sendValidationEmail(code:string): Observable<any>{
    return this.httpClient.post(`${this.url}`, 
            JSON.stringify({"email":"cristhian.valencia@nuevatel.com","code": code}), 
            this.httpOptions);
  }

}
