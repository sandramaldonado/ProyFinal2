import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '@app/services/product.service';
import { Product } from '@models/Product';
import { SaleDetail } from '@models/SaleDetail';
import {WebstoreService} from '../../../../core/services/webstore/webstore.service'
import {ThemePalette} from '@angular/material/core';
import {MatSlideToggleModule,MatSlideToggleChange,MatSlideToggle} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-detail-sale',
  templateUrl: './detail-sale.component.html',
  styleUrls: ['./detail-sale.component.scss']
})
export class DetailSaleComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = true ;
  disabled = false;
  DetailForm = new FormGroup({
    'DetailForm': new FormControl('', [Validators.required]),
  });
  @Output() nextCheckEmailStep = new EventEmitter<any>();
  isChecked=false;
  product :any;
  producto:any;
  precio:any;
  total :any;
  currency: any;
  data1 : Array<any> = [];
  data2 : Array<any> = [];
  planList: any;
  articulo: any;
  x:any;
  scoring:any
  descuento:any;
  code:any;
  listOfOptions = [
    {value:"cardPayment",design:"credit_card",style:"background-color: #5C349D; color: white; border: 1px solid #5C349D; border-radius:16px;",name:"Tarjeta débito/credito",id:"1",checked:true},
    {value:"uponDelivery",design:"local_atm",style:"background-color:#5C339D; color: white; border: 1px solid #5C339D; border-radius:16px;",name:"Pago a contra entrega",id:"2",checked:false}
    ];
  constructor(public webStorage: WebstoreService) { }



  ngOnInit(): void {
    this.total = this.webStorage.getOfferTotaldetail();
    this.getProduct();
    this.scoring = this.webStorage.getScoring();
    if(this.scoring["acceptRecurrentPayment"] == true){
      this.checked = true;
    }
    else{
      this.checked = false;
    }


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

  Visible(){
    this.code = this.webStorage.getOfferConsuptioncode();
    console.log(this.code);
    console.log("a ver")
    if (this.code == "CCOPOS"){

      return true;
    }
    else{
      this.checked = false;
      return false;
    }
  }


  descuentoActivado(){

    if(this.checked == true   )
    {
      console.log(this.checked);
      console.log("asdf")
      return true;
    }
    else{
      return false;
    }
  }

  automaticPayment(){

    if(this.isChecked)
    {
      this.webStorage.saveAutomaticPayment(true);
      console.log("a ver")
    }
    else{
      this.webStorage.saveAutomaticPayment(false);
    }
  }
    
    
  comprar(){

  }

  onChange($event: MatSlideToggleChange) {
    console.log($event);
    console.log("queso:" + this.isChecked);
    this.webStorage.saveAutomaticPayment(this.isChecked);
  }
    
    
}
