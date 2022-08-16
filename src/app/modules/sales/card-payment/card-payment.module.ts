import { LazyElementsModule } from '@angular-extensions/elements';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CardPaymentRoutingModule } from './card-payment-routing.module';
import { CardPaymentComponent } from "./card-payment.component";

@NgModule({
    declarations: [
        CardPaymentComponent
    ],
    imports: [
        CommonModule,
        CardPaymentRoutingModule,
        SharedModule,
        LazyElementsModule
    ],
    schemas : [CUSTOM_ELEMENTS_SCHEMA],
    exports : [CardPaymentComponent]
})

export class CardPaymentModule { }