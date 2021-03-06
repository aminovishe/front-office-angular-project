import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Utils} from '../shared/utils';
import {AuthGuard} from '../auth.guard';
import {UserService} from '../shared/services/user.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {
  subMenuItems: NavigationMain[] = [];
  currentRoute = this.router.url;
  isLoggedIn = !this.authGuard.canActivate();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authGuard: AuthGuard,
              private userService: UserService) { }

  ngOnInit() {
    this.initializeNavBar();
    this.changeActiveUrl(this.currentRoute);
    Utils.initializeClickNavBar(50);
  }

  initializeNavBar() {
    this.subMenuItems = [
      {
        name: 'Login',
        visible: true,
        url: '/account/login'
      },
      {
        name: 'Register',
        visible: true,
        url: '/account/register',
      }
    ];
  }

  changeActiveUrl(url: string) {
    this.subMenuItems.forEach(
      component => {
        component.active = '';
        if (url.indexOf(component.url) !== -1) {
          component.active = 'active';
        }
        if (component.childrens) {
          component.childrens.forEach(
            child => {
              child.active = '';
              if (url.indexOf(child.url) !== -1) {
                child.active = 'active';
              }
            }
          );
        }
      }
    );
  }

  logout() {
    this.userService.logout()
      .subscribe(response => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
        Swal.fire({icon: 'success', title: 'Good bye !!', text: ''});
      });
  }
}

export class NavigationMain {
  public name: string;
  public active?: string;
  public childrens?: ChildrenNavigation[] = [];
  public url?: string;
  public visible?: boolean;
  public numberAlertes?: number;
}

export class ChildrenNavigation {
  public name: string;
  public active?: string;
  public url?: string;
  public numberAlertes?: number;

  public action?: any;
  public hidden?: boolean;
}
