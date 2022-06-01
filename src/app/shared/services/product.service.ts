import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as cts  from "../utils/constants";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  product: Product = new Product;
  httpPostOptions = cts.httpPostOptions;
  constructor(
    private http: HttpClient
  ) { 
   
  }

  getProducts(): Observable<any> {
    return this.http.get<Product>(environment.urlBack + '/posts')
  }
}
