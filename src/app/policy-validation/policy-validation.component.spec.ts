import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyValidationComponent } from './policy-validation.component';

describe('PolicyValidationComponent', () => {
  let component: PolicyValidationComponent;
  let fixture: ComponentFixture<PolicyValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
