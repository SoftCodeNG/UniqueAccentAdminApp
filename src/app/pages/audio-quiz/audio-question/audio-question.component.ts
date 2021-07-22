import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuizService} from "../../../core/services/quiz.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-audio-question',
  templateUrl: './audio-question.component.html',
  styleUrls: ['./audio-question.component.scss']
})
export class AudioQuestionComponent implements OnInit {
    audioQuestionForm: FormGroup;


  constructor(
    private quizService: QuizService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.audioQuestionForm = this.fb.group({
      quizId: [this.activatedRoute.snapshot.params.id, Validators.required],
      question: ['', Validators.required],
      questionNo: ['', Validators.required],
      maxScore: ['', Validators.required],
    });

  }

  audioQuestion(): void {
    console.log(this.audioQuestionForm)
    if (this.audioQuestionForm.valid === true) {
      console.log(this.audioQuestionForm.value);
      this.quizService.createTextQuestion(this.audioQuestionForm.value).subscribe(res => {
        console.log(res);
      });
    }
  }
}
