import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from '@angular/material/list'; 
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    RouterModule,
    MatListModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FooterModule { }
