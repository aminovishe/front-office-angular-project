import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) { }

  canActivate(): boolean {
    if (!this.userService.loggedIn()) {
      this.router.navigate(['/account/login']);
      return false;
    } else {
      return true;
    }
  }
}
