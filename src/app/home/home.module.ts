import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeRouting} from './home.routing';

@NgModule({
  imports: [
    HomeRouting,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
