import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StorageService} from './services/storage.service';
import {MomentModule} from 'angular2-moment';
import {NgBusyModule} from 'ng-busy';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgBusyModule,
    MomentModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgBusyModule,
    MomentModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [StorageService]
})
export class SharedModule {

}
