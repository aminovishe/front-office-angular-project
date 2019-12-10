import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {AccountModule} from './account/account.module';
import {HomeModule} from './home/home.module';

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
        loadChildren: loadHomeModule
      },
      {
        path: 'account',
        loadChildren: loadAccountModule
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
