/**
 * Modulo determina selecion Elecion forma de entrega
 * NuevaTel PCS de Bolivia S.A. (c) 2022
 * El contenido de este archivo esta clasificado como:
 * INFORMACION DE CONFIDENCIALIDAD ALTA
 * @author Victor Antonio Zurita Borja
 * @version 1.0.0
 * @date 2022-08-01
 * @since 1.8.0_232 
*/
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryMethodRoutingModule } from './delivery-method-routing.module';
import { DeliveryMethodComponent } from './delivery-method.component';
import { HeaderModule } from '@layout/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { LazyElementsModule } from '@angular-extensions/elements';
import { StoreCityModule } from '../store-city/store-city.module';

@NgModule({
  declarations: [
    DeliveryMethodComponent
  ],
  imports: [
    CommonModule,
    DeliveryMethodRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    SharedModule,
    LazyElementsModule,
    StoreCityModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [DeliveryMethodComponent]
})
export class DeliveryMethodModule { }
