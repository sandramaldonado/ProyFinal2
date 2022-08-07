import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Client } from '@models/Client';
import { Observable, throwError } from 'rxjs';
import { WebstoreService } from './webstore/webstore.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url: string = 'http://localhost:3000/planPostpagoBack/sendEmail';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private httpClient: HttpClient,
    private webstoreservice : WebstoreService
    ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  sendValidationEmail(code:string): Observable<any>{
    var clientInfo = this.webstoreservice.getClientInformation();
    var email = (clientInfo["email"] && clientInfo["email"]!="" ? clientInfo["email"] :"cristhian.valencia@nuevatel.com") ;
    return this.httpClient.post(`${this.url}`,
            JSON.stringify({"email":email,"code": code}),
            this.httpOptions);
  }

}
