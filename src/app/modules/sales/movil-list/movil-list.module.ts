import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovilListRoutingModule } from './movil-list-routing.module';
import { HeaderModule } from '@layout/header/header.module';
import { MovilListComponent } from './movil-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


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
    MatRadioModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [MovilListComponent]
})
export class MovilListModule { }
