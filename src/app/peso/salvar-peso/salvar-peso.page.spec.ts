import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarPesoPage } from './salvar-peso.page';

describe('SalvarPesoPage', () => {
  let component: SalvarPesoPage;
  let fixture: ComponentFixture<SalvarPesoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarPesoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarPesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
