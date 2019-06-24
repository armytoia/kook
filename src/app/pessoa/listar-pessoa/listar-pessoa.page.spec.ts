import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPessoaPage } from './listar-pessoa.page';

describe('ListarPessoaPage', () => {
  let component: ListarPessoaPage;
  let fixture: ComponentFixture<ListarPessoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPessoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPessoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
