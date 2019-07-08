import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCharactersPage } from './all-characters.page';

describe('AllCharactersPage', () => {
  let component: AllCharactersPage;
  let fixture: ComponentFixture<AllCharactersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCharactersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
