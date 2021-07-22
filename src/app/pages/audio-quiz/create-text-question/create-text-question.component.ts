import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuizService} from "../../../core/quiz.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-text-question',
  templateUrl: './create-text-question.component.html',
  styleUrls: ['./create-text-question.component.scss']
})
export class CreateTextQuestionComponent implements OnInit {
  createTextQuestionForm: FormGroup;


  constructor(
    private quizService: QuizService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createTextQuestionForm = this.fb.group({
      quizId: [this.activatedRoute.snapshot.params.slug, Validators.required],
      question: ['', Validators.required],
      questionNo: ['', Validators.required],
      maxScore: ['', Validators.required],
    });

  }

  createTextQuestion(): void {
    console.log(this.createTextQuestionForm)
    if (this.createTextQuestionForm.valid === true) {
      console.log(this.createTextQuestionForm.value);
      this.quizService.createTextQuestion(this.createTextQuestionForm.value).subscribe(res => {
        console.log(res);
        this.router.navigate([`/audio-quiz/quiz-details/${this.activatedRoute.snapshot.params.slug}`]).then();
      });
    }
  }


}
