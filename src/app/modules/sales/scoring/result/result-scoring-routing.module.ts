import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultScoringComponent } from './result-scoring.component';

const routes: Routes = [
  { path : '',  component: ResultScoringComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultScoringRoutingModule { }
