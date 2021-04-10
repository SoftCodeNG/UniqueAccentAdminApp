import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioQuizComponent } from './audio-quiz.component';

describe('QuizComponent', () => {
  let component: AudioQuizComponent;
  let fixture: ComponentFixture<AudioQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
