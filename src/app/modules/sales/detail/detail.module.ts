import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from "@layout/header/header.module";
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { DetailSaleModule }from '../detail/detail-sale/detail-sale.module';
import { CardPaymentModule } from '@modules/sales/card-payment/card-payment.module';
import { PaymentMethodModule } from '../payment-method/payment-method.module';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    HeaderModule,
    DetailSaleModule,
    CardPaymentModule,
    PaymentMethodModule
  ]
})
export class DetailModule { }
