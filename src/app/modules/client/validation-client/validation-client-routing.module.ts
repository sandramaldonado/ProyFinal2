/**
 * Routing Validación de información de Cliente
 * NuevaTel PCS de Bolivia S.A. (c) 2022
 * El contenido de este archivo esta clasificado como:
 * INFORMACION DE CONFIDENCIALIDAD ALTA
 * @author Victor Antonio Zurita Borja
 * @version 1.0.0
 * @date 2022-08-01
 * @since 1.8.0_232 
*/
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
