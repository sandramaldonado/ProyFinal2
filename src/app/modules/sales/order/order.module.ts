import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CheckCoverageModule } from '@modules/sales/check-coverage/check-coverage.module';
import { AdminClientModule } from "@modules/client/admin-client/admin-client.module";
import { CheckEmailModule } from "@modules/sales/check-email/check-email.module";
import { DocumentsModule } from '@modules/sales/documents/documents.module';
import { ResultScoringModule } from '../scoring/result/result-scoring.module';
import { HeaderModule } from "@layout/header/header.module";
import { MovilListModule } from '../movil-list/movil-list.module';
import { DetailSaleModule }from '../detail/detail-sale/detail-sale.module';
import { CardPaymentModule } from '../card-payment/card-payment.module';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    CheckCoverageModule,
    AdminClientModule,
    CheckEmailModule,
    DocumentsModule,
    ResultScoringModule,
    HeaderModule,
    MovilListModule,
    DetailSaleModule,
    CardPaymentModule
  ]
})
export class OrderModule { }
