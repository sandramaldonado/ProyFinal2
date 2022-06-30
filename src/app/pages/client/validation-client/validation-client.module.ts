import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationClientRoutingModule } from './validation-client-routing.module';
import { ValidationClientComponent } from './validation-client.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderModule } from '../../header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ValidationSmsComponent } from '../../../shared/modal/validation-sms/validation-sms.component';

@NgModule({
  declarations: [
    ValidationClientComponent,
    ValidationSmsComponent
  ],
  imports: [
    CommonModule,
    ValidationClientRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    HeaderModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class ValidationClientModule { }
