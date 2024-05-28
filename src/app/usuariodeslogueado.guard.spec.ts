import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { usuariodeslogueadoGuard } from './usuariodeslogueado.guard';

describe('usuariodeslogueadoGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => usuariodeslogueadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
