import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferDetailRoutingModule } from './offer-detail-routing.module';
import { OfferDetailComponent } from './offer-detail.component';


@NgModule({
  declarations: [
    OfferDetailComponent
  ],
  imports: [
    CommonModule,
    OfferDetailRoutingModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [OfferDetailComponent
  ]
})
export class OfferDetailModule { }
