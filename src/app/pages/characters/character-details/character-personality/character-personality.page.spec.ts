import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPersonalityPage } from './character-personality.page';

describe('CharacterPersonalityPage', () => {
  let component: CharacterPersonalityPage;
  let fixture: ComponentFixture<CharacterPersonalityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterPersonalityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPersonalityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
