import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckCoverageRoutingModule } from './check-coverage-routing.module';
import { CheckCoverageComponent } from './check-coverage.component';
import { GoogleMapsModule } from "@angular/google-maps";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from "../header/header.module";


@NgModule({
  declarations: [
    CheckCoverageComponent
  ],
  imports: [
    CommonModule,
    CheckCoverageRoutingModule,
    GoogleMapsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HeaderModule
  ]
})
export class CheckCoverageModule { }
