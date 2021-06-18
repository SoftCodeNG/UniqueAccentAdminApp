import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {SetUserProfile, SetHeaderVisibility, SetRefreshToken, SetToken} from '../../../store/app-store/app.action';
import {AuthService} from '../../../core/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AppState} from '../../../store/app-store/app.state';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  rememberMe = false;

  @Select(AppState.getToken) token$: Observable<string>;
  constructor(
    private store: Store,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('systemUser')) {
      this.router.navigate(['/auth/return']).then();
    }
    this.token$.subscribe(token => {
      const helper = new JwtHelperService();
      const isExpired = helper.isTokenExpired(token);
      if (!isExpired) {
        this.router.navigate(['/']).then();
      }
    });

    setTimeout(() => {
      this.store.dispatch(new SetHeaderVisibility('hidden'));
    }, 0);

    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
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
          this.store.dispatch(new SetUserProfile({
            isAdmin: res.isAdmin,
            isStaff: res.isStaff,
            lastLogin: res.lastLogin,
            user: res.user,
          }));
          this.toastr.success('Login successful');
          this.router.navigate(['/']).then();

          if (this.rememberMe) {
            localStorage.setItem('systemUser', JSON.stringify({email: this.loginForm.value.email, username: res.user}));
          }
        } else {
          this.toastr.error('You are not a staff of Unique Accent', 'Access Denied');
        }
      });
    }
  }

  ngOnDestroy(): void {
    setTimeout(() => {
      this.store.dispatch(new SetHeaderVisibility('visible'));
    }, 0);
  }

}
