import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { Route, ActivatedRoute } from "@angular/router";
import { ProductService } from 'src/app/shared/services/product.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  itemId : number ;
  product : Product = new Product();
  isValid = false;
  constructor( 
    private route : ActivatedRoute,
    private productService : ProductService,
    private cartService : CartService
    ) {
      this.itemId = 0;
     }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductDetail(id);
    console.log(id)
    this.route.queryParams.subscribe(params => {
      console.log(params);
      //this.productService.getProductDetail()
    });

  }
  getProductDetail(id: number) {
    this.productService.getProductDetail(id)
    .subscribe(product =>{
      this.isValid = true;
      this.product = product;
    },
    (error)=>{
      this.product = {
        itemId : id,
        name : "No Disponible",
        price: 0,
        description : "Informacion No Disponible"

      }

    })
    
  }

  addToCart(product : Product){
    this.cartService.addToCart(product);
  }

}
