import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product [] = [];
  private listSizeSubject: Subject<number>;
  private _listSize: Observable<number>;

  constructor() {
    this.listSizeSubject = new Subject();
    this._listSize = this.listSizeSubject.asObservable();
   }

  addToCart (product : Product){
    this.products.push(product);
    this.listSizeSubject.next(this.products.length);

  }

  getItems (){
    this.listSizeSubject.next(this.products.length);
    return this.products;
  }

  getSize (){
    return this._listSize;
  }

  clearCart (){
    this.products = [];
    return this.products;
  }
}
