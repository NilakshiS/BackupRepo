import { TestBed } from '@angular/core/testing';

import { SupplierService } from './supplier.service';

describe('SupplierServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierService = TestBed.get(SupplierService);
    expect(service).toBeTruthy();
  });
});
