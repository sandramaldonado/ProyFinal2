import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckCoverageRoutingModule } from './check-coverage-routing.module';
import { CheckCoverageComponent } from './check-coverage.component';
import { GoogleMapsModule } from "@angular/google-maps";


@NgModule({
  declarations: [
    CheckCoverageComponent
  ],
  imports: [
    CommonModule,
    CheckCoverageRoutingModule,
    GoogleMapsModule
  ]
})
export class CheckCoverageModule { }
