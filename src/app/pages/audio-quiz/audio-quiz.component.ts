import {Component, OnInit} from '@angular/core';
import {SetTitle} from '../../store/app-store/app.action';
import {Store} from '@ngxs/store';
import {QuizService} from '../../core/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './audio-quiz.component.html',
  styleUrls: ['./audio-quiz.component.scss']
})
export class AudioQuizComponent implements OnInit {
  allQuiz: any[];
  next: string;
  prev: string;

  constructor(
    private quizService: QuizService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new SetTitle('Audio Quiz'));
    this.getAllQuiz();
  }

  getAllQuiz(): void {
    this.quizService.getAllQuiz().subscribe(res => {
      console.log(res);
      this.allQuiz = res.results;
      this.next = res.next;
      this.prev = res.previous;
    });
  }

  searchAllQuiz(value: string): void {
    if (value) {
      this.quizService.searchAllQuiz(value).subscribe(res => {
        console.log(res);
        this.allQuiz = res.results;
        this.next = res.next;
        this.prev = res.previous;
      });
    } else {
      this.getAllQuiz();
    }
  }


  navigate(direction: string): void {
    this.quizService.navigateQuiz(direction).subscribe(res => {
      console.log(res);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      this.allQuiz = res.results;
      this.next = res.next;
      this.prev = res.previous;
    });
  }
}
