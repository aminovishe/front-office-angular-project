import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';
import Swal from 'sweetalert2';
import {SharedModule} from '../../shared/shared.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  userForm;

  ngOnInit() {
  }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  onSubmit(form: NgForm) {
    this.userService.addUser(this.user)
      .subscribe(response => {
        if (response['success']) {
          Swal.fire({icon: 'success', title: 'Merci !!', text: response['success']});
        } else {
          Swal.fire({icon: 'error', title: 'Erreur !!', text: response['error']});
        }

      });
  }

}
