import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCoverageComponent } from './check-coverage.component';

const routes: Routes = [
  { path : '', component : CheckCoverageComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckCoverageRoutingModule { }
