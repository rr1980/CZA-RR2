import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenConfirmationComponent } from './citizen-confirmation.component';

describe('CitizenConfirmationComponent', () => {
  let component: CitizenConfirmationComponent;
  let fixture: ComponentFixture<CitizenConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
