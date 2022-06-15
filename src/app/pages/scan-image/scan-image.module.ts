import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScanImageRoutingModule } from './scan-image-routing.module';
import { ScanImageComponent } from './scan-image.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ScanImageComponent
  ],
  imports: [
    CommonModule,
    ScanImageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ZXingScannerModule
  ]
})
export class ScanImageModule { }
