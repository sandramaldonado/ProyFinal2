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
    path : 'scoring',
    loadChildren : () => import ('./modules/sales/scoring/result/result-scoring.module').then (m => m.ResultScoringModule)
  },
  {
    path : 'oferta/orden-compra',
    loadChildren : () => import ('./modules/sales/order/order.module').then (m => m.OrderModule)
  },
  {
    path : 'almost-done',
    loadChildren : () => import ('../app/modules/sales/almost-done/almost-done.module').then (m => m.AlmostDoneModule)
  },
  {
    path : 'detalle-compra',
    loadChildren : () => import ('./modules/sales/detail/detail.module').then (m => m.DetailModule)
  },
  {
    path : 'client',
    loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule)
  },
  {
    path : 'moviles',
    loadChildren: () => import('./modules/sales/movil-list/movil-list.module').then(m => m.MovilListModule)
  },
  {
    path : 'entrega',
    loadChildren: () => import('./modules/sales/delivery-method/delivery-method.module').then(m => m.DeliveryMethodModule)
  },
  {
    path : 'stores',
    loadChildren: () => import('./modules/sales/store-city/store-city.module').then(m => m.StoreCityModule)
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
    path: 'cobertura',
    loadChildren: () => import('./modules/sales/check-coverage/check-coverage.module').then( m => m.CheckCoverageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./modules/sales/documents/documents.module').then( m => m.DocumentsModule)
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
    path: 'payment',
    loadChildren: () => import('./modules/sales/card-payment/card-payment.module').then( m => m.CardPaymentModule)
  },
  {
    path: 'payment-done',
    loadChildren: () => import('./pages/payment-done/payment-done.module').then( m => m.PaymentDoneModule)
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
