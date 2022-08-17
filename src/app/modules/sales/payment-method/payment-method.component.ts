import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrdersService } from '@app/services/orders.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  listOfOptions = [
    {value:"cardPayment",design:"credit_card",style:"background-color: #5C349D; color: white; border: 1px solid #5C349D; border-radius:16px;",name:"Tarjeta débito / crédito",id:"1",checked:true},
    {value:"uponDelivery",design:"local_atm",style:"background-color:#5C339D; color: white; border: 1px solid #5C339D; border-radius:16px;",name:"Pago a contra entrega",id:"2",checked:false}
    ];

  @Output() nextMovilListStep = new EventEmitter<any>();


  constructor(
    private webstoreservice: WebstoreService,
    private ordersService: OrdersService) {

  }

  ngOnInit(): void {
    console.log('init PaymentMethodComponent');
  }

  radioChange(event: any) {
    console.log(event);
  }

}
