import { CardPaymentComponent } from './card-payment.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path : '', component : CardPaymentComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class CardPaymentRoutingModule {}