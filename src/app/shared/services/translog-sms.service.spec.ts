import { TestBed } from '@angular/core/testing';

import { TranslogSmsService } from './translog-sms.service';

describe('TranslogSmsService', () => {
  let service: TranslogSmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslogSmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
