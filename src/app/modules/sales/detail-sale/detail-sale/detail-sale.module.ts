import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { DetailSaleRoutingModule } from './detail-sale-routing.module';
import {DetailSaleComponent}from './detail-sale.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    DetailSaleComponent
  ],
  imports: [
    CommonModule,
    DetailSaleRoutingModule,
    MatCardModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports: [DetailSaleComponent]
})
export class DetailSaleModule { }
