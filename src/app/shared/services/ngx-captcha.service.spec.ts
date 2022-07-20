import { TestBed } from '@angular/core/testing';

import { NgxCaptchaService } from './ngx-captcha.service';

describe('NgxCaptchaService', () => {
  let service: NgxCaptchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCaptchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
