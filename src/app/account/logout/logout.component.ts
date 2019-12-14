import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user = new User();

  ngOnInit() {
  }

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.userService.logout()
      .subscribe(response => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      });
  }



}
