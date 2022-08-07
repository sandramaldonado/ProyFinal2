import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleModeRoutingModule } from './sale-mode-routing.module';
import { SaleModeComponent } from './sale-mode.component';
import { HeaderModule } from '@layout/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { LazyElementsModule } from '@angular-extensions/elements';


@NgModule({
  declarations: [
    SaleModeComponent
  ],
  imports: [
    CommonModule,
    SaleModeRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    SharedModule,
    LazyElementsModule
  ]
})
export class SaleModeModule { }
