import { NgModule } from '@angular/core';
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
    path : 'client',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'en-construccion',
    loadChildren: () => import('./layout/under-construction/under-construction.module').then( m => m.UnderConstructionModule)
  },
  {
    path: 'oferta',
    loadChildren: () => import('./pages/sales/sales.module').then( m => m.SalesModule)
  },
  {
    path: 'captcha',
    loadChildren: () => import('./pages/captcha/captcha.module').then( m => m.CaptchaModule)
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
    loadChildren: () => import('./modules/sales/check-coverage/check-coverage.module').then( m => m.CheckCoverageModule)
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
    loadChildren : () => import ('./modules/product/item-detail/item-detail.module').then (m => m.ItemDetailModule)
  },
  {
    path: '**',
    loadChildren: () => import('./layout/under-construction/under-construction.module').then( m => m.UnderConstructionModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
