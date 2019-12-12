import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';

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

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  onSubmit(form: NgForm) {
    console.log(this.user);
  }

}
