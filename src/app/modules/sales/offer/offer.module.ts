import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    OfferComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [OfferComponent]
})
export class OfferModule { }
