import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInformationsPage } from './character-informations.page';

describe('CharacterInformationsPage', () => {
  let component: CharacterInformationsPage;
  let fixture: ComponentFixture<CharacterInformationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInformationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInformationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
