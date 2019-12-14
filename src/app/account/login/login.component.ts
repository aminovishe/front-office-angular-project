import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  userForm;

  ngOnInit() {
  }

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  onSubmit(form: NgForm) {
    this.userService.login(this.user)
      .subscribe(response => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/']);
        Swal.fire({icon: 'success', title: 'Welcome !!', text: ''});
      });
  }

}
