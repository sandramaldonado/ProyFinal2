import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminClientComponent } from './admin-client.component';

const routes: Routes = [
  {
    path: '', 
    component: AdminClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminClientRoutingModule { }
