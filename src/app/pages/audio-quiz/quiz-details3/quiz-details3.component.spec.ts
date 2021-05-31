import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetails3Component } from './quiz-details3.component';

describe('QuizDetails3Component', () => {
  let component: QuizDetails3Component;
  let fixture: ComponentFixture<QuizDetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDetails3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
