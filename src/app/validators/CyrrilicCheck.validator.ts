import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";
import { Directive } from "@angular/core";


@Directive({
  selector: '[CyrilicCheckValidator][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CyrilicCheckValidator, multi: true }]
})
export class CyrilicCheckValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value.match('/[А-яЁё]/g')) {
      return {
        validate: {
          valid: false
        }
      }
    }
    return null;
  }
}
