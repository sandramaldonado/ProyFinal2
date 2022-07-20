import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationClientRoutingModule } from './validation-client-routing.module';
import { ValidationClientComponent } from './validation-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaptchaModule } from '../../captcha/captcha.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ValidationClientComponent
  ],
  imports: [
    CommonModule,
    ValidationClientRoutingModule,
    FormsModule,
    HeaderModule,
    CaptchaModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    HeaderModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ValidationClientModule { }
