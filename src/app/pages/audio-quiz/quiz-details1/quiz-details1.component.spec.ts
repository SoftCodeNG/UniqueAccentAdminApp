import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetails1Component } from './quiz-details1.component';

describe('QuizDetails1Component', () => {
  let component: QuizDetails1Component;
  let fixture: ComponentFixture<QuizDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDetails1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
