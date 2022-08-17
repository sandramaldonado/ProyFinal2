import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebstoreService } from '@app/services/webstore/webstore.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  optionSelected: any;
  listOfOptions = [
    {value:'cardPayment',design:'credit_card',name:'Tarjeta débito / crédito'}
  ];

  @Output() nextMovilListStep = new EventEmitter<any>();
  flow: any;


  constructor(
    private webstoreservice: WebstoreService) {
      this.flow = this.webstoreservice.getStatusScoring();
      if(this.flow==='EXPRESS'){
        this.listOfOptions.push(
          {value:'uponDelivery',design:'local_atm',name:'Pago a contra entrega'}
        );
      }
  }

  ngOnInit(): void {
    console.log('init PaymentMethodComponent');
    this.optionSelected = 'cardPayment';
  }

  radioChange(event: any) {
    console.log(event);
    this.webstoreservice.saveDataInSession('paymentMethod', event.value);
  }

}
