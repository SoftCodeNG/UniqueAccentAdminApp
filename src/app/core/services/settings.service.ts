import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  baseURL = environment.baseUrl;
  constructor( private http: HttpClient ) { }

  createService(data: any): Observable<any> {
    const payload = new FormData();
    payload.append('title', data.title);
    payload.append('thumbnail', data.thumbnail);
    payload.append('isFeatured', data.featured);
    payload.append('description', data.description);
    return this.http.post<any>(`${this.baseURL}settings/services/createService`, payload)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
  settingsTestimonial(data: any): Observable<any> {
    const payload = new FormData();
    payload.append('name', data.name);
    payload.append('thumbnail', data.thumbnail);
    payload.append('isFeatured', data.featured);
    payload.append('isFeatured', data.featured);
    payload.append('description', data.description);
    return this.http.post<any>(`${this.baseURL}settings/settings-testimonial `, payload)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
   getAllTestimonials(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}settings/testimonials/getAllTestimonials/${slug}`)
      .pipe(
        map(res => {
          return res.results;
        })
      ) ;
  }
}

