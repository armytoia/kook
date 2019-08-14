import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarImcPage } from './salvar-imc.page';

describe('SalvarImcPage', () => {
  let component: SalvarImcPage;
  let fixture: ComponentFixture<SalvarImcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarImcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarImcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
