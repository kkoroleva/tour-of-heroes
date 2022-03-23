import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { User } from './user';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  formGroup: FormGroup;
  userData: User = {
    firstName: '',
    lastName: '',
  };

  readonly basicSuperpowers = ['жизнерадостность', 'интеллект', 'заинтересованность'] as const;
  superpowers: string[] = ['жизнерадостность', 'интеллект', 'заинтересованность'];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;

  constructor(private builder: FormBuilder) {

    this.formGroup = this.builder.group({
      firstNameControl: new FormControl('', [Validators.required, Validators.pattern(/[А-яё]/)]),
      lastNameControl: new FormControl('', [Validators.required, Validators.pattern(/[А-яё]/)]),
      fatherNameControl: new FormControl('', [Validators.pattern(/[А-яё]/)]),
      emailControl: new FormControl('', [Validators.email]),
      powersControl: this.builder.array([new FormControl(this.superpowers)]),
    });
  }

  isInvalid(control: string){
    return this.formGroup.controls[control].invalid && this.formGroup.controls[control].touched;
  }

  onSubmit(): void {
    this.userData.firstName = this.formGroup.value.firstNameControl;
    this.userData.lastName = this.formGroup.value.lastNameControl;
    this.userData.fatherName = this.formGroup.value.fatherNameControl;
    this.userData.email = this.formGroup.value.emailControl;
    this.userData.powers = this.formGroup.value.powersControl;
  }

  ngOnInit(): void {
  }

  addPower(event: MatChipInputEvent): void {
    if (!this.superpowers.includes(event.value) && event.value) {
      this.superpowers.push(event.value);
    }
    event.chipInput!.clear();
  }

  removePower(power: string): void {
    if (this.superpowers.includes(power)) {
      this.superpowers.splice(this.superpowers.indexOf(power), 1);
    }
  }

  get powers() {
    return this.formGroup.controls["powersControl"] as FormArray;
  }

  clearForm(): void {
    this.formGroup.reset();
    this.powers.clear();

    this.basicSuperpowers.forEach(el => {
      this.powers.push(this.builder.control(el));
    });
  }

}
