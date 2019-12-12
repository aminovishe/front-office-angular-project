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

  constructor(private httpClient: HttpClient) { }

  /** POST User */
  addUser (user: User) {
    return this.httpClient.post(this.userUrl, user);
  }
}
