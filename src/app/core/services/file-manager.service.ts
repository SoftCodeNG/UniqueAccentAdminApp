import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  baseURL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllMedia(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}media/getAllMedia`)
      .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  getAllImages(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}media/getAllImages`)
      .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  getAllVideo(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}media/getAllVideo`)
      .pipe(
        map(res => {
          return res.payload;
        })
      );
  }

  getAllAudio(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}media/getAllAudio`)
      .pipe(
        map(res => {
          return res.payload;
        })
      );
  }
}
