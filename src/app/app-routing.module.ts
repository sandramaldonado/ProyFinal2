import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

const routes : Routes = [
  {
    path : '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'oferta',
    loadChildren : () => import ('./modules/sales/offer/offer.module').then (m => m.OfferModule)
  },
  {
    path : 'oferta/orden-compra',
    loadChildren : () => import ('./modules/sales/order/order.module').then (m => m.OrderModule)
  },
  {
    path : 'client',
    loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'en-construccion',
    loadChildren: () => import('./layout/under-construction/under-construction.module').then( m => m.UnderConstructionModule)
  },
  {
    path: 'lista-productos',
    loadChildren: () => import('./modules/product/product-list/product-list.module').then( m => m.ProductListModule)
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
    path: 'cobertura',
    loadChildren: () => import('./modules/sales/check-coverage/check-coverage.module').then( m => m.CheckCoverageModule)
  },
  {
    path: 'verificar-email',
    loadChildren: () => import('./modules/sales/check-email/check-email.module').then( m => m.CheckEmailModule)
  },
  {
    path : 'tomar-foto',
    loadChildren : () => import('./core/modals/take-picture/take-picture.module').then(m => m.TakePictureModule)
  },
  {
    path : 'compras',
    loadChildren: () => import('./modules/sales/cart/cart.module').then(m => m.CartModule)
  },
  { path : 'producto/detalle/:id',
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
