import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '@app/services/product.service';
import { Product } from '@models/Product';
import { SaleDetail } from '@models/SaleDetail';
import {WebstoreService} from '../../../../core/services/webstore/webstore.service'
import {ThemePalette} from '@angular/material/core';
import {MatSlideToggleModule,MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-detail-sale',
  templateUrl: './detail-sale.component.html',
  styleUrls: ['./detail-sale.component.scss']
})
export class DetailSaleComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = true ;
  @Input() disabled = false;
  DetailForm = new FormGroup({
    'DetailForm': new FormControl('', [Validators.required]),
  });
  @Output() nextCheckEmailStep = new EventEmitter<any>();
  isChecked:any;
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

  conDescuento: any;
  fecha: Date | undefined;
  mes: number | undefined;
  nombreMes: any;

  constructor(public webStorage: WebstoreService) { }



  ngOnInit(): void {
    var  months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];    
    this.fecha = new Date();
    this.nombreMes=months[this.fecha.getMonth()+1];
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
    this.producto = this.product["groupTradeName"];
    this.precio = this.product["tariff"];
    this.currency= this.product["currencyCode"];
    //this.planList = this.product["planList"];
   // this.articulo = this.planList["categoryData"];

    /* this.planList.forEach((element: any) => {
      this.articulo = element.componentOffer;
=======
    this.planList.forEach((element: any) => {
      //this.articulo = element.componentOffer;
>>>>>>> develop
      this.data1.push(element.componentOffer);
      console.log(element.componentOffer)


    }); */

   /*  this.articulo.forEach((data:any)=>{
      this.data2.push(data.tariff);
    })
 */

  }

  Visible(){
    this.code = this.webStorage.getOfferConsuptioncode();
    console.log(this.code);
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
      return true;
    }
    else{
      return false;
    }
  }


  comprar(){



  }





  onChange($event: MatSlideToggleChange) {
    console.log($event);
    console.log("queso:" + this.isChecked);
    this.discount();
    this.webStorage.saveAutomaticPayment(this.isChecked);
  }

  discount(){
    this.conDescuento =  ((this.total * 10)/100);
  }

}
