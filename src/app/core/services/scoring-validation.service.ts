import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScoringValidation } from '@models/ScoringValidation';
import { retry, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoringValidationService {
  // definicion de variables cabecera y url de consumo
  headers: any;
  httpOptions: any;
  apiUrl = "http://omega.10.45.57.104.sslip.io/rules/scoring/scoringEvaluation";
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
   getValidationClientScoring(clientId: String, token:String): Observable<ScoringValidation> {
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };

    const httpOptions = {
      headers: headers
    };

    const jsontext = JSON.stringify({"client":{"clientId": clientId},"commercialOffer": {"productTypeCode": ["MOVIL", "IFIXED"],"groupPlan": "TRIPLE_PLAY"},"saleOrder": {"planCode": "1","processTypeCode": "PTFSALE","channelCode": "CAASES","cityCode": "CBA","price": 400,"creationDate": "28-07-2022","serviceQuantity": "3","hasSubsidyOfEquipmentInSale": "SI"},"userId": 21});
    /**
     const jsontext2 = JSON.stringify({
                          "client": {
                              "clientId": clientId
                            },
                            "commercialOffer": {
                              "productTypeCode": [
                                "MOVIL", "IFIXED", "ENTERT"
                              ],
                              "groupPlan": "TRIPLE_PLAY"
                            },
                            "saleOrder": {
                              "planCode": "1",
                              "processTypeCode": "PTFSALE",
                              "channelCode": "CAASES",
                              "cityCode": "CBA",
                              "price": 400,
                              "creationDate": "28-07-2022",
                              "serviceQuantity": "3",
                              "hasSubsidyOfEquipmentInSale": "SI"
                            },
                            "userId": 21
                          });
     */

    return this.httpClient.post<ScoringValidation>(`${this.apiUrl}`, jsontext, httpOptions).pipe(retry(1), catchError(this.handleError));

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
