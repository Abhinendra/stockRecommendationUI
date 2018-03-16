import { TestBed, inject } from '@angular/core/testing';

import { NseServiceService } from './nse-service.service';

describe('NseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NseServiceService]
    });
  });

  it('should be created', inject([NseServiceService], (service: NseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
