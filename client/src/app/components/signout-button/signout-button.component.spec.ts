import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutButtonComponent } from './signout-button.component';

describe('SignoutButtonComponent', () => {
  let component: SignoutButtonComponent;
  let fixture: ComponentFixture<SignoutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
