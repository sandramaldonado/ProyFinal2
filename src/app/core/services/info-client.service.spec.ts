import { TestBed } from '@angular/core/testing';

import { InfoClientService } from './info-client.service';

describe('InfoClientService', () => {
  let service: InfoClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
