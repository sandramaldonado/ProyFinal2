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
    console.log('datos crear');
    console.log(param);
    console.log('datos fin crear');
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

  getItemsPlan(param: any, token: any): Observable<any> {
    var headers = {
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(this.endPoint + '/product/items', param, httpOptions)
      .pipe(
        map(res => res));
  }

  getItemDetail(param: any, token: any): Observable<any> {
    var headers = {
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(this.endPoint + '/product/item', param, httpOptions)
      .pipe(
        map(res => res));
  }

  registerItemsSale(param: any, token: any): Observable<any> {
    var headers = {
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(this.endPoint + '/order/saleItem/register', param, httpOptions)
      .pipe(
        map(res => res));
  }

}
