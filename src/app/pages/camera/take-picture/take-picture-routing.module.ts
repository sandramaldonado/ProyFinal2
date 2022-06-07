import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakePictureComponent } from './take-picture.component';

const routes: Routes = [
  { path : '', component : TakePictureComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakePictureRoutingModule { }
