import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseURL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //   getAllQuiz(): Observable<any> {
  //   return this.http.get<any>(`${this.baseURL}quiz/getQuiz`)
  //     .pipe(
  //       map(res => {
  //         return res;
  //       })
  //     );
  // }

  //   navigateQuiz(direction: string): Observable<any> {
  //   return this.http.get<any>(direction)
  //     .pipe(
  //       map(res => {
  //         return res;
  //       })
  //     );
  // }

  //   getQuizDetails(slug: string): Observable<any> {
  //   return this.http.get<any>(`${this.baseURL}quiz/getQuizDetails/${slug}`)
  //    .pipe(
  //       map(res => {
  //         return res.payload;
  //       })
  //     );
  // }

  //   createQuiz(data: any): Observable<any> {
  //   const payload = new FormData();
  //   payload.append('title', data.title);
  //   payload.append('duration', data.duration);
  //   payload.append('passcode', data.passcode);
  //   payload.append('thumbnail', data.thumbnail);
  //   payload.append('instruction', data.instruction);
  //   return this.http.post<any>(`${this.baseURL}quiz/createQuiz`, payload)
  //    .pipe(
  //       map(res => {
  //         return res.payload;
  //       })
  //     );
  // }

  //   updateQuiz(data: any, slug: string): Observable<any> {
  //   const payload = new FormData();
  //   payload.append('title', data.title);
  //   payload.append('duration', data.duration);
  //   payload.append('passcode', data.passcode);
  //   payload.append('thumbnail', data.thumbnail);
  //   payload.append('instruction', data.instruction);
  //   return this.http.put<any>(`${this.baseURL}quiz/updateQuiz/${slug}`, payload)
  //    .pipe(
  //       map(res => {
  //         return res.payload;
  //       })
  //     );
  // }

  //   deleteQuiz(slug: string): Observable<any>{
  //   return this.http.delete<any>(`${this.baseURL}quiz/deleteQuiz/${slug}`)
  //    .pipe(
  //       map(res => {
  //         return res.payload;
  //       })
  //     );
  // }

}
