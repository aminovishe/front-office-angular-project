import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {AccountModule} from './account/account.module';
import {HomeModule} from './home/home.module';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
import {AccountComponent} from './account/account.component';
import {AuthGuard} from './auth.guard';

export function loadHomeModule() {
  return HomeModule;
}
export function loadAccountModule() {
  return AccountModule;
}

export const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: loadHomeModule,
        canActivate: [AuthGuard]
      },
      {
        path: 'account',
        component: AccountComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'register',
            component: RegisterComponent
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
