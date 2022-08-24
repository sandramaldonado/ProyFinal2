import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private api: ApiService, private http: HttpClient) { }

  startOrder(token: string, data: {}): Observable<any> {
    return this.api.post('/workflow/sales/startOrder', data, { token }).pipe();
  }

  startOrderNew(data: any, token: any): Observable<any> {
    var headers = {
      'Authorization': 'Bearer ' + token
    };
    const httpOptions = {
      headers: headers
    };
    return this.http.post<any>(environment.endPoint + '/workflow/sales/startOrder', httpOptions)
      .pipe(
        map(res => res));
  }
}
