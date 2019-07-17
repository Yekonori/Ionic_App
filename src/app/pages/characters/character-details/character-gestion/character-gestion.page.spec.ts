import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGestionPage } from './character-gestion.page';

describe('CharacterGestionPage', () => {
  let component: CharacterGestionPage;
  let fixture: ComponentFixture<CharacterGestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterGestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
