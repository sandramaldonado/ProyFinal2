import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

const routes : Routes = [
  {
    path : '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'en-construccion',
    loadChildren: () => import('./pages/under-construction/under-construction.module').then( m => m.UnderConstructionModule)
  },
  {
    path: 'oferta',
    loadChildren: () => import('./pages/sales/sales.module').then( m => m.SalesModule)
  },
  {
    path: 'validacion',
    loadChildren: () => import('./pages/validation/validation.module').then( m => m.ValidationModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'cobertura',
    loadChildren: () => import('./pages/check-coverage/check-coverage.module').then( m => m.CheckCoverageModule)
  },
  {
    path : 'tomar-foto',
    loadChildren : () => import('./pages/camera/take-picture/take-picture.module').then(m => m.TakePictureModule)
  },
  {
    path : 'compras',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
  },
  { path : 'oferta/detalle/:id',
    loadChildren : () => import ('./pages/item-detail/item-detail.module').then (m => m.ItemDetailModule)
  },
  {
    path : 'escanear-documento',
    loadChildren : () => import ('./pages/scan-image/scan-image.module').then(m=> m.ScanImageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/under-construction/under-construction.module').then( m => m.UnderConstructionModule)
  }

]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
