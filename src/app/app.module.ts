import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from "@layout/header/header.module";
import { NgxWebstorageModule } from "ngx-webstorage";
//import { LoadPictureComponent } from './pages/test/load-picture/load-picture.component';
import { SmsModalComponent } from '@app/modals/sms-modal/sms-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


//import { ClientModule } from './pages/client/client.module';
import { AuthInterceptor } from "@app/interceptors/auth-interceptor";

//import { MovilListComponent } from './modules/sales/movil-list/movil-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SmsModalComponent
    //MovilListComponent,
  ],
  imports: [
    BrowserModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [
   //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
