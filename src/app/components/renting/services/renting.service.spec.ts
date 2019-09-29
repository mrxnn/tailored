import { TestBed } from '@angular/core/testing';

import { RentingService } from './renting.service';

describe('RentingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentingService = TestBed.get(RentingService);
    expect(service).toBeTruthy();
  });
});
