import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverPersonalAbilityComponent } from './popover-personal-ability.component';

describe('PopoverPersonalAbilityComponent', () => {
  let component: PopoverPersonalAbilityComponent;
  let fixture: ComponentFixture<PopoverPersonalAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverPersonalAbilityComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverPersonalAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
