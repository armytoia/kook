import { TestBed } from '@angular/core/testing';

import { MassaService } from './massa.service';

describe('MassaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MassaService = TestBed.get(MassaService);
    expect(service).toBeTruthy();
  });
});
