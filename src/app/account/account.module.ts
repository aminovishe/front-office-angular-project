import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountRouting } from './account.routing';
import { AccountComponent } from './account.component';


@NgModule({
  imports: [
    AccountRouting,
    SharedModule,
  ],
  declarations: [RegisterComponent, LoginComponent, AccountComponent]
})
export class AccountModule { }
