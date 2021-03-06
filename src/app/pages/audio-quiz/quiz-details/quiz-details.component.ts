import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../../core/services/quiz.service';

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
    this.getQuizDetails(this.activatedRoute.snapshot.params.id);
  }

  getQuizDetails(id: string): void {
    this.quizService.getQuizDetails(id).subscribe(res => {
      this.quizDetails = res;
      console.log(res);
    });
  }
}
