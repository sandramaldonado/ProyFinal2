import { TestBed } from '@angular/core/testing';

import { MovilListService } from './movil-list.service';

describe('MovilListService', () => {
  let service: MovilListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovilListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
