import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

const routes : Routes = [
  {
    path: 'en-construccion',
    loadChildren: () => import('./pages/under-construction/under-construction.module').then( m => m.UnderConstructionModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('./pages/sales/sales.module').then( m => m.SalesModule)
  }

]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
