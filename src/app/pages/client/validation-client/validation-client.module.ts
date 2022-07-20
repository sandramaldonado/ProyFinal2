import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationClientRoutingModule } from './validation-client-routing.module';
import { ValidationClientComponent } from './validation-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '@layout/header/header.module';
import { CaptchaModule } from '../../captcha/captcha.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ValidationSmsComponent } from '@app/modal/validation-sms/validation-sms.component';

@NgModule({
  declarations: [ValidationClientComponent,
                ValidationSmsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ValidationClientRoutingModule,
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
