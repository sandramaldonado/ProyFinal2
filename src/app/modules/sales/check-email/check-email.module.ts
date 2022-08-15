import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { CheckEmailRoutingModule } from './check-email-routing.module';
import { CheckEmailComponent } from './check-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    CheckEmailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CheckEmailRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [CheckEmailComponent]
})
export class CheckEmailModule { }
