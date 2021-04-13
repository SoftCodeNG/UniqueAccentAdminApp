import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextQuestionComponent } from './create-text-question.component';

describe('CreateTextQuestionComponent', () => {
  let component: CreateTextQuestionComponent;
  let fixture: ComponentFixture<CreateTextQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTextQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTextQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
