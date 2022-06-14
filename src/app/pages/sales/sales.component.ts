import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from "../../shared/services/product.service";
import { CartService } from "../../shared/services/cart.service";
import { Route, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  productList: Product[] = [];
  showFiller = false;

  constructor(
    private productService : ProductService,
    private cartService : CartService


  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    const p = this.productService.getProducts();
    p.subscribe( response => {
      this.productList = [];
      
      response.forEach((element : any) => {
        
        //const y = { ...element.payload.toJSON(), $key: element.key };
       
        this.productList.push(element as Product);
      
      });

      console.log( this.productList);

    })
  }
  addToCart(product : Product){
    this.cartService.addToCart(product);
  }
  showDetail(product : Product){
 
  }

}
