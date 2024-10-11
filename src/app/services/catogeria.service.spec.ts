import { TestBed } from '@angular/core/testing';

import { CatogeriaService } from './catogeria.service';

describe('CatogeriaService', () => {
  let service: CatogeriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatogeriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
