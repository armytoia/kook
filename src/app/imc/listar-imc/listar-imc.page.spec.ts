import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarImcPage } from './listar-imc.page';

describe('ListarImcPage', () => {
  let component: ListarImcPage;
  let fixture: ComponentFixture<ListarImcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarImcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarImcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
