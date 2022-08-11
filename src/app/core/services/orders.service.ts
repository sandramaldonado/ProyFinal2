import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  endPoint = environment.endPoint;

  constructor(private http: HttpClient) { }

  createOrder(param: any, token: any): Observable<any> {
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(this.endPoint + '/order/create/orderMain', param, httpOptions)
      .pipe(
        map(res => res));
  }

  registerOrderView(param: any, token: any): Observable<any> {
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(this.endPoint + '/order/searches/orderView', param, httpOptions)
      .pipe(
        map(res => res));
  }

  createPerson(param: any, token: any): Observable<any> {
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(this.endPoint + '/sales/creates/client/person', param, httpOptions)
      .pipe(
        map(res => res));

            /* {createPerson: {
          birthdayStr: '',
          documentCityCode: 'CCBA',
          documentIdentifier: '987623456',
          documentTypeCode: 'CI',
          email: '',
          genderCode: '',
          lastName1: 'Lobesno',
          lastName2: '',
          middleName: '',
          name: 'Juan',
          personTypeCode: 'NATURAL'},
    createPersonAdditionalData: [
          {
          dataTypeCode: 'CONTACT_PHONE',
          status: 'A',
          valueData: '78656467',
          }],
          userId: 21} */

        /*data:
          data:
            messageResponse: "La persona fue registrada satisfactoriamente."
            personId: 521050387
            transactionId: 1660231494943
        responseCode: "OK"
        esponseMessage: null*/
  }

}
