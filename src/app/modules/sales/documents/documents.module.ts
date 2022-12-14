import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [DocumentsComponent]
})
export class DocumentsModule { }
