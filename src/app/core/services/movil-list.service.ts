import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovilListService {
  // definicion de variables cabecera y url de consumo
  headers: any;
  httpOptions: any;
  //apiUrl = "https://omega.devnt.ssidevops.com/sales/find/phone/numbers";
  apiUrl : string = `${environment.MovilNumberListApiUrl}`;
  /**
   * constructor de instancia de clase httpClient y HttpHeaders
   */
  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders();
    this.httpOptions = {};
  }

  /**
   * Metodo de consulta de validacion de factibilidd
   */
   getMovilList(planService: String, token:String): Observable<any> {
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.post<any>(`${this.apiUrl}`, planService, httpOptions).pipe(retry(1), catchError(this.handleError));

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
