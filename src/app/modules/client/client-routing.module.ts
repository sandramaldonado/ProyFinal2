import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '', 
    component: ClientComponent
  },
  {
    path : 'validationClient',
    loadChildren: () => import('./validation-client/validation-client.module').then(m => m.ValidationClientModule)
  },
  {
    path : 'adminClient/:phone',
    loadChildren: () => import('./admin-client/admin-client.module').then(m => m.AdminClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
