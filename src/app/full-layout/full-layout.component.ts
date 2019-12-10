import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Utils} from '../shared/utils';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {
  subMenuItems: NavigationMain[] = [];
  currentRoute = this.router.url;

  constructor(private route: ActivatedRoute, private router: Router) { }

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
        url: '/account/register'
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
