import { TestBed } from '@angular/core/testing';

import { PetshopService } from './petshop.service';

describe('PetshopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetshopService = TestBed.get(PetshopService);
    expect(service).toBeTruthy();
  });
});
