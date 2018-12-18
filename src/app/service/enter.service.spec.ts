import { TestBed } from '@angular/core/testing';

import { EnterService } from './enter.service';

describe('EnterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnterService = TestBed.get(EnterService);
    expect(service).toBeTruthy();
  });
});
