import { Component, OnInit } from '@angular/core';
import { Product } from '@models/Product';
import { ProductService } from "@services/product.service";
import { CartService } from "@services/cart.service";
import { Route, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-sales',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
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
