import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CheckEmailRoutingModule } from './check-email-routing.module';
import { CheckEmailComponent } from './check-email.component';
import { HeaderModule } from "@layout/header/header.module";
import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    CheckEmailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CheckEmailRoutingModule,
    HeaderModule,
    SharedModule
  ]
})
export class CheckEmailModule { }
