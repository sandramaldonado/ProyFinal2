import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationRoutingModule } from './validation-routing.module';
import { ValidationComponent } from './validation.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ValidationComponent
  ],
  imports: [
    CommonModule,
    ValidationRoutingModule,
    MatCardModule, 
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ValidationModule { }
