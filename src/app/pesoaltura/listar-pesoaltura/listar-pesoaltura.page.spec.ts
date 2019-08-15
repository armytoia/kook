import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPesoalturaPage } from './listar-pesoaltura.page';

describe('ListarPesoalturaPage', () => {
  let component: ListarPesoalturaPage;
  let fixture: ComponentFixture<ListarPesoalturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPesoalturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPesoalturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
