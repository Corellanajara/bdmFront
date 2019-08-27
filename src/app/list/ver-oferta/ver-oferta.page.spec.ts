import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerOfertaPage } from './ver-oferta.page';

describe('VerOfertaPage', () => {
  let component: VerOfertaPage;
  let fixture: ComponentFixture<VerOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerOfertaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
