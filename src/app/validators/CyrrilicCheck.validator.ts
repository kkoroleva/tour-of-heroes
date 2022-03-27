import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";
import { Directive } from "@angular/core";


@Directive({
  selector: '[CyrilicCheckValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CyrilicCheckValidator, multi: true}]
})
export class CyrilicCheckValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors|null {
    if (!control.value.match(/[А-яЁё]/)) {
      console.log('Oooops!');
      return {'error': true}
    }

    return null;
  }
}
