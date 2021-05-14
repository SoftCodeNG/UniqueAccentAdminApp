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
          return res.payload;
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

  getCourseLessons(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}courses/getCourseLessons/${id}`)
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
}
