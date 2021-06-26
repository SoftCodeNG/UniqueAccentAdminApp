import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseURL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}courses/getCourses`)
      .pipe(
        map(res => {
          return res.results;
        })
      );
  }

  getCourseDetails(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}courses/getCourseDetails/${slug}`)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  getCourseLessons(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}courses/getCourseLessons/${slug}`)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  getLessonDetails(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}courses/getLessonDetail/${slug}`)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  createCourse(data: any): Observable<any> {
    const payload = new FormData();
    payload.append('title', data.title);
    payload.append('duration', data.duration);
    payload.append('price', data.price);
    payload.append('thumbnail', data.thumbnail);
    payload.append('description', data.description);
    payload.append('video', data.video);
    return this.http.post<any>(`${this.baseURL}courses/createCourse`, payload)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  updateCourse(data: any, slug: string): Observable<any> {
    const payload = new FormData();
    payload.append('title', data.title);
    payload.append('duration', data.duration);
    payload.append('price', data.price);
    payload.append('thumbnail', data.thumbnail);
    payload.append('description', data.description);
    payload.append('video', data.video);
    return this.http.put<any>(`${this.baseURL}courses/updateCourse/${slug}`, payload)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

 createLesson(data: any): Observable<any> {
    const payload = new FormData();
    payload.append('title', data.title);
    payload.append('duration', data.duration);
    payload.append('courseSlug', data.courseSlug);
    payload.append('thumbnail', data.thumbnail);
    payload.append('description', data.description);
    payload.append('video', data.video);
    return this.http.post<any>(`${this.baseURL}courses/createLesson`, payload)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

 updateLesson(data: any, slug: string): Observable<any> {
    const payload = new FormData();
    payload.append('title', data.title);
    payload.append('duration', data.duration);
    payload.append('courseSlug', data.courseSlug);
    payload.append('thumbnail', data.thumbnail);
    payload.append('description', data.description);
    payload.append('video', data.video);
    return this.http.put<any>(`${this.baseURL}courses/updateLesson/${slug}`, payload)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  deleteLesson(slug: string): Observable<any>{
    return this.http.delete<any>(`${this.baseURL}courses/deleteLesson/${slug}`)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  getLessonComments(lessonId: any): Observable<any> {
    return this.http.get<any>(`${this.baseURL}courses/getLessonComments/${lessonId}`)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

   replyComment(data: any): Observable<any> {
    const payload = new FormData();
    payload.append('commentId', data.commentId);
    payload.append('userId', data.userId);
    payload.append('comment', data.comment);
    return this.http.post<any>(`${this.baseURL}courses/replyComment`, payload)
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }
}
