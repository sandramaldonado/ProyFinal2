import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationClientRoutingModule } from './validation-client-routing.module';
import { ValidationClientComponent } from './validation-client.component';


@NgModule({
  declarations: [
    ValidationClientComponent
  ],
  imports: [
    CommonModule,
    ValidationClientRoutingModule
  ]
})
export class ValidationClientModule { }
