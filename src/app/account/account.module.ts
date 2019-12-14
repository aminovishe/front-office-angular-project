import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountRouting } from './account.routing';
import { AccountComponent } from './account.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  imports: [
    AccountRouting,
    SharedModule,
  ],
  declarations: [RegisterComponent, LoginComponent, AccountComponent, LogoutComponent]
})
export class AccountModule { }
