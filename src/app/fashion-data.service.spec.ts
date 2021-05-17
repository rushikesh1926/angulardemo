import { TestBed } from '@angular/core/testing';

import { FashionDataService } from './fashion-data.service';

describe('FashionDataService', () => {
  let service: FashionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
