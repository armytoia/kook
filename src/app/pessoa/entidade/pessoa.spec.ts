import { TestBed } from '@angular/core/testing';

import { Pessoa } from './pessoa';

describe('UsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Pessoa = TestBed.get(Pessoa);
    expect(service).toBeTruthy();
  });
});
