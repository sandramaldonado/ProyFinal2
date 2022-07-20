import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckEmailComponent } from './check-email.component';

const routes: Routes = [
  { path : '', component : CheckEmailComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckEmailRoutingModule { }
