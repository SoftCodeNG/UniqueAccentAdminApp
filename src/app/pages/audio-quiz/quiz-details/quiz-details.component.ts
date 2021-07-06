import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../core/quiz.service";

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {
  public quizDetails: any;

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getQuizDetails(this.activatedRoute.snapshot.params.slug);

  }

  getQuizDetails(slug: string): void {
    this.quizService.getQuizDetails(slug).subscribe(res => {
      this.quizDetails = res;
      // this.isPublished = res.isPublished;
      this.getQuizDetails(this.quizDetails.slug);
      console.log(res);
    });
  }
}
