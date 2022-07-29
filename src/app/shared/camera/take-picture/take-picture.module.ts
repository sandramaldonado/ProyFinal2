import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakePictureRoutingModule } from './take-picture-routing.module';
import { TakePictureComponent } from './take-picture.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {WebcamModule} from 'ngx-webcam';
import { HeaderModule } from "@layout/header/header.module";


@NgModule({
  declarations: [
    TakePictureComponent
  ],
  imports: [
    CommonModule,
    TakePictureRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    WebcamModule,
    HeaderModule,
  ]
})
export class TakePictureModule { }
