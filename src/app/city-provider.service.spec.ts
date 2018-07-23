import { TestBed, inject } from '@angular/core/testing';

import { CityProviderService } from './city-provider.service';

describe('CityProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityProviderService]
    });
  });

  it('should be created', inject([CityProviderService], (service: CityProviderService) => {
    expect(service).toBeTruthy();
  }));
});
