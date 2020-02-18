import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenPersonalDetailsComponent } from './citizen-personal-details.component';

describe('CitizenPersonalDetailsComponent', () => {
  let component: CitizenPersonalDetailsComponent;
  let fixture: ComponentFixture<CitizenPersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenPersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
