import { CUSTOM_ELEMENTS_SCHEMA, NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./components/button/button.component";
import { ButtonOutlineComponent } from "./components/button-outline/button-outline.component";
import { ButtonSecondaryComponent } from "./components/button-secondary/button-secondary.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { InputTextComponent } from './components/input-text/input-text.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ButtonComponent,
    ButtonOutlineComponent,
    ButtonSecondaryComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [
    InputTextComponent,
    ButtonComponent,
    ButtonOutlineComponent,
    ButtonSecondaryComponent
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
