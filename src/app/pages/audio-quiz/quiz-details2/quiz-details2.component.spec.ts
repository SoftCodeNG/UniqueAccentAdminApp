import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetails2Component } from './quiz-details2.component';

describe('QuizDetails2Component', () => {
  let component: QuizDetails2Component;
  let fixture: ComponentFixture<QuizDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
