import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaptchaRoutingModule } from './captcha-routing.module';
import { CaptchaComponent } from './captcha.component';
import { CaptchaService } from '@services/captcha.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CaptchaComponent
  ],
  imports: [
    CommonModule,
    CaptchaRoutingModule,
    FormsModule
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
