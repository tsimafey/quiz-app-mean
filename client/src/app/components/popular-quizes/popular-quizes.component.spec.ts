import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularQuizesComponent } from './popular-quizes.component';

describe('PopularQuizesComponent', () => {
  let component: PopularQuizesComponent;
  let fixture: ComponentFixture<PopularQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
