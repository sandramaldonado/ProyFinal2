import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { Route, ActivatedRoute } from "@angular/router";
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  itemId : number ;
  product : Product = new Product();
  constructor( 
    private route : ActivatedRoute,
    private productService : ProductService
    ) {
      this.itemId = 0;
     }

  ngOnInit(): void {
this.route.queryParams.subscribe(params => {
  //this.productService.getProductDetail()
});

  }

}
