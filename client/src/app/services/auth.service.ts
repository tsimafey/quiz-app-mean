import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { appConfig } from '../config/app.config';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(user: User) {
    return this.http.post(`${appConfig.apiUrl}/auth/signup`, user);
  }

  signin(user: User) {
    return this.http.post(`${appConfig.apiUrl}/auth/signin`, user);
  }
}
