/**
 * Modulo Validacion de existencia Cliente en O2 y/o O3
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
import { ValidationClientRoutingModule } from './validation-client-routing.module';
import { ValidationClientComponent } from './validation-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaptchaModule } from '../../captcha/captcha.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HeaderModule } from '@layout/header/header.module';
import { PlanSelectedComponent } from '@app/modal/plan-selected/plan-selected.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LazyElementsModule } from '@angular-extensions/elements';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ValidationClientComponent,
    PlanSelectedComponent
  ],
  imports: [
    CommonModule,
    ValidationClientRoutingModule,
    FormsModule,
    CaptchaModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    HeaderModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    SharedModule,
    LazyElementsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ValidationClientModule { }
