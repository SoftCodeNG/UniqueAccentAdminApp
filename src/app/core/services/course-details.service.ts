import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {
   baseURL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCourseDetails(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}courses/getCoursesDetail`
     .pipe(
        map(res => {
          return res.payload;
        })
      );
  }
}
