import { Injectable } from '@angular/core';
import { CanLoad, Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Select} from '@ngxs/store';
import {AppState} from '../../store/app-store/app.state';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class ReverseAuthGuard implements CanActivate {
  @Select(AppState.getToken) token$: Observable<string>;

  constructor() {}

  canActivate(): boolean {
    this.token$.subscribe(token => {
      const helper = new JwtHelperService();
      const isExpired = helper.isTokenExpired(token);
      if (!isExpired || !token) {
        return false;
      }
    });
    return true;
  }
}
