import { TestBed } from '@angular/core/testing';

import { WebstoreService } from './webstore.service';

describe('WebstoreService', () => {
  let service: WebstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
