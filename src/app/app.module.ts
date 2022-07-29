import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from "@layout/header/header.module";
import { NgxWebstorageModule } from "ngx-webstorage";
//import { LoadPictureComponent } from './pages/test/load-picture/load-picture.component';
import { SmsModalComponent } from '@app/modals/sms-modal/sms-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SmsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
