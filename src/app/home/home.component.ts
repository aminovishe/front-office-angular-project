import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Utils} from '../shared/utils';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/product';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];

  ngOnInit() {
  }

  constructor(private productService: ProductService) {
    this.productService.listProducts().subscribe((products: Product[]) => {
      this.products = products;
      Utils.initializeSliders(300);
    });
  }

}
