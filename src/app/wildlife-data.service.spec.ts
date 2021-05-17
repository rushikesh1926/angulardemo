import { TestBed } from '@angular/core/testing';

import { WildlifeDataService } from './wildlife-data.service';

describe('WildlifeDataService', () => {
  let service: WildlifeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WildlifeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
