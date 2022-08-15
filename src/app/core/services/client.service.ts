import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, Observable, throwError, pipe } from 'rxjs';
import { Client } from '@models/Client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // definicion de variables cabecera y url de consumo
  headers: any;
  httpOptions: any;
  //apiUrl = "https://omega.devnt.ssidevops.com/crm360/client/person/search";
  apiUrl : string = `${environment.ClientSearchApiUrl}`;
  /**
   * constructor de instancia de clase httpClient y HttpHeaders
   */
  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders();
    this.httpOptions = {};
  }
  
  /**
   * Metodo de consulta de existencia de cliente por numero telefonico
   */
  getClientByMovil(phone: String, token:String): Observable<Client> {
    // definicion de header con token integrado
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };
    // retornar valor obtenido tras consumo de api Rest crm360
    return this.httpClient.get(`${this.apiUrl}/${phone}`, { headers: this.headers });
  }

  /**
   * Metodo de consulta de existencia de cliente por DNI
   */
  getClientByDNI(dni: String, token:String): Observable<Client> {
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };

    const httpOptions = {
      headers: headers
    };

    const jsontext = JSON.stringify({"documentId": dni,"documentType": ""});

    return this.httpClient.post<Client>(`${this.apiUrl}`, jsontext, httpOptions).pipe(retry(1), catchError(this.handleError));

  }

  /**
   * Metodo de envio de errores de consumo
   */
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
