import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();

  ngOnInit() {
  }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  onSubmit(form: NgForm) {
    if (Object.keys(this.user).length !== 5) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All fields are required !!',
      });
    } else if (this.user.password !== this.user.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'The passwords do not match !!',
      });
    } else {
      console.log(this.user);
    }
  }

}
