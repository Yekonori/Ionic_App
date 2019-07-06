import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseChoicePage } from './house-choice.page';

describe('HouseChoicePage', () => {
  let component: HouseChoicePage;
  let fixture: ComponentFixture<HouseChoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseChoicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
