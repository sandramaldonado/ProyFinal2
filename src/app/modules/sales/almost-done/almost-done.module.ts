import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "@shared/shared.module";


import { AlmostDoneRoutingModule } from './almost-done-routing.module';
import { AlmostDoneComponent } from './almost-done.component';


@NgModule({
  declarations: [
    AlmostDoneComponent
  ],
  imports: [
    CommonModule,
    AlmostDoneRoutingModule,
    MatCardModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports: [AlmostDoneComponent]
})
export class AlmostDoneModule { }
