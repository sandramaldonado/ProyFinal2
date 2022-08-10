import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreCityRoutingModule } from './store-city-routing.module';
import { StoreCityComponent } from './store-city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '@shared/shared.module';
import { LazyElementsModule } from '@angular-extensions/elements';


@NgModule({
  declarations: [StoreCityComponent],
  imports: [
    CommonModule,
    StoreCityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    SharedModule,
    LazyElementsModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [StoreCityComponent]
})
export class StoreCityModule { }
