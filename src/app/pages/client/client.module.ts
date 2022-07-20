import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ValidationClientModule } from './validation-client/validation-client.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ValidationClientModule
  ]
})
export class ClientModule { }
