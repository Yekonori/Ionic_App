import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesCharactersPage } from './houses-characters.page';

describe('HousesCharactersPage', () => {
  let component: HousesCharactersPage;
  let fixture: ComponentFixture<HousesCharactersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesCharactersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesCharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
