/**
 * Componente administración Metodo de entrega
 * NuevaTel PCS de Bolivia S.A. (c) 2022
 * El contenido de este archivo esta clasificado como:
 * INFORMACION DE CONFIDENCIALIDAD ALTA
 * @author Victor Antonio Zurita Borja
 * @version 1.0.0
 * @date 2022-08-01
 * @since 1.8.0_232 
*/
import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { OrdersService } from '@app/services/orders.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';

@Component({
  selector: 'app-delivery-method',
  templateUrl: './delivery-method.component.html',
  styleUrls: ['./delivery-method.component.scss']
})
export class DeliveryMethodComponent implements OnInit, OnChanges {
  title = "¿Cómo prefieres recibir tus equipos?";
  message = "El servicio contratado tiene artículos que debemos entregarte.";
  methods: any;
  listOfOptions = [
      {value:"storesInfo",design:"storefront",style:"background-color: #5C349D; color: white; border: 1px solid #5C349D; border-radius:16px;", name:"Recoja en Tienda",id:"1",checked:true}//,
      //{value:"delivery",design:"delivery_dining",style:"background-color:#5C339D; color: white;border: 4px solid #5C339D; border-radius:12px;",name:"Delivery",id:"2",checked:false}
      ];

  validationForm = new FormGroup({
    'entregaData': new FormControl('', [Validators.required])
  });
  @Output() nextDeliveryMethodStep = new EventEmitter<any>();

  constructor(private webstoreService: WebstoreService,
            private ordersService: OrdersService) {
    this.methods = {
      storesInfo: {
        active: false,
        visited: false
      },
      deliveriesInfo: {
        active: false,
        visited: false
      }
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    alert("Existió un error en ejecución");
  }

  ngOnInit(): void {
    this.changeOptions("storesInfo");
  }

  resetDivs() {
    this.methods.storesInfo.active = false;
    this.methods.deliveriesInfo.active = false;
  }

  changeOptions(elegido: any) {
    this.resetDivs();
    this.methods[elegido].active = true;

    switch (elegido) {
      case (elegido == "storesInfo"):
        if (!this.methods.storesInfo.visited) {
          this.methods.storesInfo.visited = true;
        }
        break;
      case (elegido == "delivery"):
        if (!this.methods.deliveriesInfo.visited) {
          this.methods.deliveriesInfo.visited = true;
        }
        break;
    }
  }

  radioChange(event: MatRadioChange) {
    if (event.source.value === 'storesInfo') {
        console.log(event.source.value);
        this.changeOptions(event.source.value);
    } else {
      alert("Servicio no disponible Temporalmente");
      this.resetDivs();
    }
  }

  next(){
    this.nextDeliveryMethodStep.emit(true);
    this.registerDeliveryType();
  }

  registerDeliveryType(){
    const data ={
      "deliveryTypeId":"authorizedPointTypeId",
      "deliveryTypeDesc":"authorizedPoint",
      "paymentTypeId":"paymentCashId",
      "paymentTypeDesc":"paymentCash"
   }
    const param = {
      "orderId": this.webstoreService.getDataInSession('orderMainId'),
      "sequence": 6,
      "userId": this.webstoreService.getDataInSession('userId'),
      "microFrontendId": "delivery-type-microfront-app",
      "microFrontendData": JSON.stringify(data),
      "statusCode": "INI"
    }
    this.ordersService.registerOrderView(param, this.webstoreService.getDataInSession('token')).subscribe(
      response => {
        console.log(response);
      });
  }
}
