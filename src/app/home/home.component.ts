import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Utils} from '../shared/utils';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/product';
import {NgForm} from '@angular/forms';
import {AuthGuard} from '../auth.guard';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  isLoggedIn = !this.authGuard.canActivate();

  ngOnInit() {
  }

  constructor(private productService: ProductService,
              private authGuard: AuthGuard) {
    this.productService.listProducts().subscribe((products: Product[]) => {
      this.products = products;
      Utils.initializeSliders(300);
    });
  }

  buyProd(form: NgForm) {
    const quantity = form.controls.quantity.value;
    const productId = form.controls.id.value;
    const token = localStorage.getItem('token');
    this.productService.buyProduct(productId, quantity, token).subscribe(response => {
      if (response['success']) {
        Swal.fire({icon: 'success', title: 'Merci !!', text: response['success']});
      } else {
        Swal.fire({icon: 'error', title: 'Erreur !!', text: response['error']});
      }

    });
  }

}
