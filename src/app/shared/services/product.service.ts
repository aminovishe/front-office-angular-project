import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly apiUrl = Config.baseUrl;
  private productUrl = this.apiUrl + '/product';
  private products;

  constructor(private httpClient: HttpClient) { }

  /** GET Products */
  listProducts (): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl);
  }
}
