import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { appConfig } from '@app/config/app.config';
import { User } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  isAuthorized() {
    return !!this.userSubject.value;
  }

  signup(user: User) {
    return this.http.post(`${appConfig.apiUrl}/auth/signup`, user);
  }

  signin(user: User) {
    return this.http.post<User>(`${appConfig.apiUrl}/auth/signin`, user)
      .pipe(map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }))
  }

  signout() {
    console.log('signout')
    localStorage.removeItem('user');
    this.userSubject.next(null);
    window.location.reload();
  }
}
