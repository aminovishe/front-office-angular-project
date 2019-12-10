import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AccountRouting} from './account.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    AccountRouting,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AccountModule { }
