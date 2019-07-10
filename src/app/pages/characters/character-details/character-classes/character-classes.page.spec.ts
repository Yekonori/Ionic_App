import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassesPage } from './character-classes.page';

describe('CharacterClassesPage', () => {
  let component: CharacterClassesPage;
  let fixture: ComponentFixture<CharacterClassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterClassesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
