import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderModule } from "@layout/header/header.module";
import { FooterComponent } from "@layout/footer/footer.component";


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    RouterModule,
    HeaderModule
  ]
})
export class HomeModule { }
