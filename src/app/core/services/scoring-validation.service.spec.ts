import { TestBed } from '@angular/core/testing';

import { ScoringValidationService } from './scoring-validation.service';

describe('ScoringValidationService', () => {
  let service: ScoringValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoringValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
