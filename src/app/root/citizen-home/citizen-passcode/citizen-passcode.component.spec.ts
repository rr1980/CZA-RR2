import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenPasscodeComponent } from './citizen-passcode.component';

describe('CitizenPasscodeComponent', () => {
  let component: CitizenPasscodeComponent;
  let fixture: ComponentFixture<CitizenPasscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenPasscodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
