import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from "./pages/header/header.module";
import { NgxWebstorageModule } from "ngx-webstorage";
import { LoadPictureComponent } from './pages/test/load-picture/load-picture.component';



@NgModule({
  declarations: [
    AppComponent,
    LoadPictureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    NgxWebstorageModule.forRoot({ prefix: 'nvt', separator: ';', caseSensitive:true })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
