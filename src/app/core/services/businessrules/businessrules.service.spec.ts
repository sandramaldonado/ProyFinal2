import { TestBed } from '@angular/core/testing';

import { BusinessrulesService } from './businessrules.service';

describe('BusinessrulesService', () => {
  let service: BusinessrulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessrulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
