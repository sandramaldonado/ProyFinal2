import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Product } from '@models/Product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as cts  from "@shared/utils/constants";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  product: Product = new Product;
  httpPostOptions = cts.httpPostOptions;
  httpGetOptions = cts.httpGetOptions;
  constructor(
    private http: HttpClient
  ) { 
   
  }

  getProducts(): Observable<any> {
    return this.http.get<Product>(environment.url_api_simplekart_mock_server + '/items', this.httpGetOptions)
    //return this.http.get<Product>(environment.url_api_jsonplaceholder + '/posts', this.httpGetOptions)
  }
  getProductDetail (itemId: number):Observable<Product>{
    return this.http.get<Product>(environment.url_api_simplekart_mock_server + '/items/' + itemId )
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        //console.error(err);

      
        //Handle the error here
        return throwError(err);    //Rethrow it back to component
      })
    )

  }
}
