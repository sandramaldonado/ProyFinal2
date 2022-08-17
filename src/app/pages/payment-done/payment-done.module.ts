import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './payment-done-routing.module';
import { PaymentDoneComponent } from './payment-done.component';
import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    PaymentDoneComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [PaymentDoneComponent]
})
export class PaymentDoneModule { }
