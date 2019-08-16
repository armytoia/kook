import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPesoPage } from './listar-peso.page';

describe('ListarPesoPage', () => {
  let component: ListarPesoPage;
  let fixture: ComponentFixture<ListarPesoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPesoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
