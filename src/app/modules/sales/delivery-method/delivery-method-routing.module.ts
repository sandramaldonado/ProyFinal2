import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryMethodComponent } from './delivery-method.component';

const routes: Routes = [
  { path : '', component : DeliveryMethodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryMethodRoutingModule { }
