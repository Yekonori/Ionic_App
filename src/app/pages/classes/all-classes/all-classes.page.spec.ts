import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClassesPage } from './all-classes.page';

describe('AllClassesPage', () => {
  let component: AllClassesPage;
  let fixture: ComponentFixture<AllClassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClassesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
