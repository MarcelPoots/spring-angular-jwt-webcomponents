import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  tokenKey = 'jwt_token';
  usernameKey = 'jwt_user';
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http.post<{token:string}>('http://localhost:8080/api/auth/login', {username, password})
      .pipe(tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.usernameKey, username);
      }));
  }
  logout() { localStorage.removeItem(this.tokenKey); localStorage.removeItem(this.usernameKey); }
  isLoggedIn() { return !!localStorage.getItem(this.tokenKey); }
  getToken() { return localStorage.getItem(this.tokenKey); }
  getUsername() { return localStorage.getItem(this.usernameKey); }
}
