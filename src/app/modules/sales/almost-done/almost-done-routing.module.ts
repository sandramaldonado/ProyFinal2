import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlmostDoneComponent} from '../almost-done/almost-done.component';

const routes: Routes = [
  {path:'', component:AlmostDoneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmostDoneRoutingModule { }
