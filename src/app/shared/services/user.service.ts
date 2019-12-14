import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = Config.baseUrl;
  private userUrl = this.apiUrl + '/user';
  private loginUrl = this.apiUrl + '/auth/login';
  private logoutUrl = this.apiUrl + '/auth/logout';

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  /** POST User */
  addUser (user: User) {
    return this.httpClient.post(this.userUrl, user);
  }

  /** login User */
  login (user: User) {
    return this.httpClient.post(this.loginUrl, user);
  }

  /** logout User */
  logout () {
    return this.httpClient.post(this.logoutUrl, {'token': this.getToken()}, this.httpOptions );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
