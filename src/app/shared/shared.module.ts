import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StorageService} from './services/storage.service';
import {MomentModule} from 'angular2-moment';
import {NgBusyModule} from 'ng-busy';
import {HttpClientModule} from '@angular/common/http';
import {MustMatchValidatorDirective} from './must-match-validator.directive';
import {AuthGuard} from '../auth.guard';

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
    HttpClientModule,
    MustMatchValidatorDirective
  ],
  declarations: [
    MustMatchValidatorDirective,
  ],
  providers: [StorageService, AuthGuard]
})
export class SharedModule {

}
