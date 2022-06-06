import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckCoverageRoutingModule } from './check-coverage-routing.module';
import { CheckCoverageComponent } from './check-coverage.component';


@NgModule({
  declarations: [
    CheckCoverageComponent
  ],
  imports: [
    CommonModule,
    CheckCoverageRoutingModule,
  ]
})
export class CheckCoverageModule { }
