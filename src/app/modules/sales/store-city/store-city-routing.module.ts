import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreCityComponent } from './store-city.component';

const routes: Routes = [
  { path : '', component : StoreCityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreCityRoutingModule { }
