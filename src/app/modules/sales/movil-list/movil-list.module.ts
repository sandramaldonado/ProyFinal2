/**
 * Module administración Lista de lineas ofertadas
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
import { MovilListRoutingModule } from './movil-list-routing.module';
import { HeaderModule } from '@layout/header/header.module';
import { MovilListComponent } from './movil-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@shared/shared.module';
import { LazyElementsModule } from '@angular-extensions/elements';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [MovilListComponent],
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
    LazyElementsModule,
    NgxSpinnerModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [MovilListComponent]
})
export class MovilListModule { }
