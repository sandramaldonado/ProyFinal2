import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CheckCoverageModule } from '@modules/sales/check-coverage/check-coverage.module';
import { CheckEmailModule } from "@modules/sales/check-email/check-email.module";
import { HeaderModule } from "@layout/header/header.module";



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    CheckCoverageModule,
    CheckEmailModule,
    HeaderModule
  ]
})
export class OrderModule { }
