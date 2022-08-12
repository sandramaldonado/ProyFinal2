import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '@app/services/product.service';
import { Product } from '@models/Product';
import { SaleDetail } from '@models/SaleDetail';
import {WebstoreService} from '../../../../core/services/webstore/webstore.service'

@Component({
  selector: 'app-detail-sale',
  templateUrl: './detail-sale.component.html',
  styleUrls: ['./detail-sale.component.scss']
})
export class DetailSaleComponent implements OnInit {
  disabled : boolean = true;
  DetailForm = new FormGroup({
    'DetailForm': new FormControl('', [Validators.required]),
  });
  @Output() nextCheckEmailStep = new EventEmitter<any>();

  product :any;
  producto:any;
  precio:any;
  total = 20;
  currency: any;
  data1 : Array<any> = [];
  data2 : Array<any> = [];
  planList: any;
  articulo: any;
  x:any;
  constructor(public webStorage: WebstoreService) { }



  ngOnInit(): void {
    this.getProduct();
  
  }

  getProduct (){
    
    this.product = this.webStorage.getPlanComposition();
    console.log('aqui:'+ JSON.stringify(this.product));
    this.producto = this.product["groupTradeName"];
    console.log(this.producto);
    this.precio = this.product["tariff"];
    this.currency= this.product["currencyCode"];
    this.planList = this.product["planList"];
    this.articulo = this.planList["categoryData"];
    

    this.planList.forEach((element: any) => {
      this.articulo = element.componentOffer;
      this.data1.push(element.componentOffer);
      console.log(element.componentOffer)

      
    });

    this.articulo.forEach((data:any)=>{
      this.data2.push(data.tariff);
    })

    
  }

  next(){
    this.nextCheckEmailStep.emit(true);
  }

}
