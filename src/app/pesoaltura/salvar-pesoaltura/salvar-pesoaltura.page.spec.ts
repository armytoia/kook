import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarPesoalturaPage } from './salvar-pesoaltura.page';

describe('SalvarPesoalturaPage', () => {
  let component: SalvarPesoalturaPage;
  let fixture: ComponentFixture<SalvarPesoalturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarPesoalturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarPesoalturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
