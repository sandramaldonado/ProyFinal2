import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationClientComponent } from './validation-client.component';

const routes: Routes = [
  {
    path: '', 
    component: ValidationClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationClientRoutingModule { }
