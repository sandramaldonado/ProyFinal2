import { Injectable } from '@angular/core';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product [] = [];

  constructor() { }

  addToCart (product : Product){
    this.products.push(product);
  }

  getItems (){
    return this.products;
  }

  clearCart (){
    this.products = [];
    return this.products;
  }
}
