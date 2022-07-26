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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
