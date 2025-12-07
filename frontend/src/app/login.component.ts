import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  template: `
  <div *ngIf="!authService.isLoggedIn()">
    <h3>Login</h3>
    <form (submit)='login()'>
      <input placeholder="username" [(ngModel)]="username" name="username"/>
      <input placeholder="password" [(ngModel)]="password" name="password" type="password"/>
      <button type="button" (click)="login()">Login</button>
    </form>
    <div *ngIf="error" style="color:red">{{error}}</div>
  </div>
  <div *ngIf="authService.isLoggedIn()">
    <p>Logged in as {{authService.getUsername()}}</p>
    <button (click)="logout()">Logout</button>
  </div>
  `
})
export class LoginComponent {
  username = 'user';
  password = 'password';
  error = '';
  constructor(public authService: AuthService) {}
  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => { this.error = ''; },
      error: err => { this.error = 'Login failed'; }
    });
  }
  logout() { this.authService.logout(); }
}
