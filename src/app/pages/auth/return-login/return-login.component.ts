import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Select, Store} from '@ngxs/store';
import {AppState} from '../../../store/app-store/app.state';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SetRefreshToken, SetToken} from '../../../store/app-store/app.action';
import {AuthService} from '../../../core/services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-return-login',
  templateUrl: './return-login.component.html',
  styleUrls: ['./return-login.component.scss']
})
export class ReturnLoginComponent implements OnInit {
  loginForm: FormGroup;
  userEmail: string;
  userName: string;

  @Select(AppState.getToken) token$: Observable<string>;
  constructor(
    private store: Store,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('systemUser')) {
      this.userEmail = JSON.parse(localStorage.getItem('systemUser')).email;
      this.userName = JSON.parse(localStorage.getItem('systemUser')).username;
    } else {
      this.router.navigate(['/auth']).then();
    }

    this.token$.subscribe(token => {
      const helper = new JwtHelperService();
      const isExpired = helper.isTokenExpired(token);
      if (!isExpired) {
        this.router.navigate(['/']).then();
      }
    });
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [this.userEmail, Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([ Validators.required])],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(res => {
        if (res.isAdmin || res.isStaff) {
          console.log('Login Successful');
          this.store.dispatch(new SetToken(res.access));
          this.store.dispatch(new SetRefreshToken(res.refresh));
          this.toastr.success('Login successful');
          this.router.navigate(['/']).then();
        } else {
          this.toastr.error('You are not a staff of Unique Accent', 'Access Denied');
        }
      });
    }
  }

  switchAccount(): void {
    localStorage.removeItem('systemUser');
    this.router.navigate(['/auth']).then();
  }
}
