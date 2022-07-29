import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminClientRoutingModule } from './admin-client-routing.module';
import { AdminClientComponent } from './admin-client.component';
import { HeaderModule } from '@layout/header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { CheckCoverageModule } from '../../sales/check-coverage/check-coverage.module';
import { CaptchaModule } from '@modules/captcha/captcha.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [AdminClientComponent],
  imports: [
    CommonModule,
    AdminClientRoutingModule,
    FormsModule,
    HeaderModule,
    CheckCoverageModule,
    MatExpansionModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports : [AdminClientComponent]
})
export class AdminClientModule { }
