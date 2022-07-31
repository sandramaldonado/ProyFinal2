import { CUSTOM_ELEMENTS_SCHEMA, NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./components/button/button.component";
import { ButtonOutlineComponent } from "./components/button-outline/button-outline.component";
import { ButtonSecondaryComponent } from "./components/button-secondary/button-secondary.component";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ButtonComponent,
    ButtonOutlineComponent,
    ButtonSecondaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule


  ],
  exports: [
    ButtonComponent,
    ButtonOutlineComponent,
    ButtonSecondaryComponent
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
