import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanImageComponent } from './scan-image.component';

const routes: Routes = [
  { path: '', component:ScanImageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanImageRoutingModule { }
