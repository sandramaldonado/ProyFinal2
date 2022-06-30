import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { NewClientModule } from './new-client/new-client.module';
import { ValidationClientModule } from './validation-client/validation-client.module';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NewClientModule,
    ValidationClientModule
  ]
})
export class ClientModule { }
