import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[comfirmMatchValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting : MustMatchValidatorDirective,
    multi: true
  }]
})
export class MustMatchValidatorDirective implements Validator {
  @Input() comfirmMatchValidator: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    const controlToCompare = control.parent.get(this.comfirmMatchValidator);
    if (controlToCompare.value !== control.value) {
      return { 'notEqual': true };
    }
    return null;
  }
}
