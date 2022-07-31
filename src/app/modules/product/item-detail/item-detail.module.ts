import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailRoutingModule } from './item-detail-routing.module';
import { ItemDetailComponent } from './item-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderModule } from "@layout/header/header.module";
import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    ItemDetailRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HeaderModule,
    SharedModule
  ]
})
export class ItemDetailModule { }
