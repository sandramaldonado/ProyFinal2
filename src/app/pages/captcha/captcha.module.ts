import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchaRoutingModule } from './captcha-routing.module';
import { CaptchaComponent } from './captcha.component';
import { FormsModule } from '@angular/forms';
import { CaptchaService } from '../../shared/services/captcha.service';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    CaptchaComponent
  ],
  imports: [
    CommonModule,
    CaptchaRoutingModule,
    FormsModule,
    NgxCaptchaModule
  ],
  exports:[CaptchaComponent]
})
export class CaptchaModule {
  static forRoot(): ModuleWithProviders <CaptchaModule> {
    return {
      ngModule: CaptchaModule,
      providers: [ CaptchaService ]
    };
  }
}
