import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenPrivacyPolicyComponent } from './citizen-privacy-policy.component';

describe('CitizenPrivacyPolicyComponent', () => {
  let component: CitizenPrivacyPolicyComponent;
  let fixture: ComponentFixture<CitizenPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
