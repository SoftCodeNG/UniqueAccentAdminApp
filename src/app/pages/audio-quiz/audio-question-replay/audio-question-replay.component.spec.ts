import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioQuestionReplayComponent } from './audio-question-replay.component';

describe('AudioQuestionReplayComponent', () => {
  let component: AudioQuestionReplayComponent;
  let fixture: ComponentFixture<AudioQuestionReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioQuestionReplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioQuestionReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
