import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  endPoint = environment.endPoint;
  endPointMgd = environment.urlMgd;

  constructor(private http: HttpClient) { }

  createOrder(param: any, token: any): Observable<any> {
    var headers = {
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
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(this.endPoint + '/order/registers/orderView', param, httpOptions)
      .pipe(
        map(res => res));
  }

  createPerson(param: any, token: any): Observable<any> {
    var headers = {
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(this.endPoint + '/sales/creates/client/person', param, httpOptions)
      .pipe(
        map(res => res));
  }

  uploadDocuments(param: any, token: any): Observable<any> {
    var headers = {
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(this.endPointMgd + '/documents/upload', param, httpOptions)
      .pipe(
        map(res => res));
  }

}
