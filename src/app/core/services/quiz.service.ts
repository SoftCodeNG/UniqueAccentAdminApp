import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseURL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getAllQuiz(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}quiz/getQuiz`)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  searchAllQuiz(value: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}quiz/getQuiz/searchValue/${value}`)
      .pipe(
        map(res => {
          return res;
        })
      );
  }


  createQuiz(data: any): Observable<any> {
    const payload = new FormData();
    payload.append('title', data.title);
    payload.append('duration', data.duration);
    payload.append('passCode', data.passCode);
    payload.append('endDate', data.endDate);
    payload.append('organisation', data.organisation);
    payload.append('organisationLogo', data.organisationLogo);
    payload.append('startDate', data.startDate);
    payload.append('instruction', data.instruction);
    return this.http.post<any>(`${this.baseURL}quiz/createQuiz`, payload)
      .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  getQuizDetails(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}quiz/getQuizDetails/${slug}`)
      .pipe(
        map(res => {
          return res.payload;
        })
      ) ;
  }

  createTextQuestion(data: any): Observable<any> {
    const payload = new FormData();
    payload.append('quizId', data.quizId);
    payload.append('question', data.question);
    payload.append('questionNo', data.questionNo);
    payload.append('maxScore', data.maxScore);
    return this.http.post<any>(`${this.baseURL}quiz/createQuestion`, payload)
      .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  navigateQuiz(direction: string): Observable<any> {
    return this.http.get<any>(direction)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

}
