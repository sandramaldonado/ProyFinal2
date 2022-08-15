import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovilListComponent } from './movil-list.component';

const routes: Routes = [
  { path : '', component : MovilListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovilListRoutingModule { }
