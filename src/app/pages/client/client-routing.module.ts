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
    path : 'newClient',
    loadChildren: () => import('./new-client/new-client.module').then(m => m.NewClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
