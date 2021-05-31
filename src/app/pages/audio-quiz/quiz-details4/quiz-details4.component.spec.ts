import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetails4Component } from './quiz-details4.component';

describe('QuizDetails4Component', () => {
  let component: QuizDetails4Component;
  let fixture: ComponentFixture<QuizDetails4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDetails4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetails4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
