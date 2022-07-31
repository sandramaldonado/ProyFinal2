import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakePictureRoutingModule } from './take-picture-routing.module';
import { TakePictureComponent } from './take-picture.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WebcamModule} from 'ngx-webcam';
import { SharedModule } from "@shared/shared.module";


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
    SharedModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [TakePictureComponent]
})
export class TakePictureModule { }
