// @ts-ignore
// @ts-ignore

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {isObservable} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  baseURL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

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
UpdateService(data: any, id: number): Observable<any> {
    const payload = new FormData();
    payload.append('title', data.title);
    payload.append('thumbnail', data.thumbnail);
    payload.append('isFeatured', data.featured);
    payload.append('description', data.description);
    return this.http.put<any>(`${this.baseURL}settings/services/updateService/$(id)`, payload)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
  createTestimonial(data: any): Observable<any> {
    const payload = new FormData();
    payload.append('name', data.name);
    payload.append('avatar', data.avatar);
    payload.append('title', data.subtext);
    payload.append('testimony', data.testimony);
    return this.http.post<any>(`${this.baseURL}settings/testimonial/createTestimonial`, payload)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  updateTestimonial(data: any, id: number): Observable<any> {
    const payload = new FormData();
    payload.append('name', data.name);
    payload.append('avatar', data.avatar);
    payload.append('title', data.subtext);
    payload.append('testimony', data.testimony);
    return this.http.put<any>(`${this.baseURL}settings/testimonial/updateTestimonial/${id}`, payload)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  getAllTestimonials(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}settings/testimonial/getAllTestimonials`)
      .pipe(
        map(res => {
          return res.results;
        })
      );
  }
   getAllServices(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}settings/services/getAllServices`)
      .pipe(
        map(res => {
          return res.results;
        })
      );
  }
  deleteTestimonial(id: number): Observable<any>{
   return this.http.delete<any>(`${this.baseURL}settings/testimonial/deleteTestimonial/${id}`)
     .pipe(
        map(res => {
          return res.payload;
        })
       );
  }
 addHomePageSlider(data: any ): Observable<any> {
    const payload = new FormData();
    payload.append('image', data.image);
    return this.http.post<any>(`${this.baseURL}settings/homePageSlider/addHomePageSlider` , payload)
      .pipe(
        map(res => {
          return res.payload;
        })
      );
  }
    getAllHomePageSlider(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}settings/homePageSlider/getAllHomePageSlider`)
      .pipe(
        map(res => {
          return res.results;
        })
      );
  }
  deleteService(slug: string): Observable<any>{
   return this.http.delete<any>(`${this.baseURL}settings/services/deleteService/${slug}`)
     .pipe(
        map(res => {
          return res.payload;
        })
       );
  }
   deleteHomePageSlider(id: string): Observable<any>{
   return this.http.delete<any>(`${this.baseURL}settings/homePageSlider/deleteHomePageSlider/${id}`)
     .pipe(
        map(res => {
          return res.payload;
        })
       );
  }
}


