import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovilListRoutingModule } from './payment-method-routing.module';
import { HeaderModule } from '@layout/header/header.module';
import { PaymentMethodComponent } from './payment-method.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@shared/shared.module';
import { LazyElementsModule } from '@angular-extensions/elements';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [PaymentMethodComponent],
  imports: [
    CommonModule,
    MovilListRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    SharedModule,
    FlexLayoutModule,
    LazyElementsModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [PaymentMethodComponent]
})
export class PaymentMethodModule { }
