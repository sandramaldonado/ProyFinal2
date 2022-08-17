import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private api: ApiService) { }

  startOrder(token: string, data: {}): Observable<any> {
    return this.api.post('/workflow/sales/startOrder', data, { token }).pipe();
  }
}
