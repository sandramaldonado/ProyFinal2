import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailSaleComponent} from './detail-sale.component';
const routes: Routes = [
  {path: '', component:DetailSaleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailSaleRoutingModule { }
