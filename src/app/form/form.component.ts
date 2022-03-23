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

  basicSuperpowers: string[] = ['жизнерадостность', 'интеллект', 'заинтересованность'];
  readonly superpowers = this.basicSuperpowers;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;

  constructor(private builder: FormBuilder) {

    this.formGroup = this.builder.group({
      firstNameControl: new FormControl('', [Validators.required, Validators.pattern(/[А-яё]/)]),
      lastNameControl: new FormControl('', [Validators.required, Validators.pattern(/[А-яё]/)]),
      fatherNameControl: new FormControl('', [Validators.pattern(/[А-яё]/)]),
      emailControl: new FormControl('', [Validators.email]),
      powersControl: this.builder.array(this.superpowers),
    });
  }

  isInvalid(control: string): boolean {
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
    if (!this.powers.value.has(event.value) && event.value) {
     this.powers.push(new FormControl(event.value));
    }
    event.chipInput!.clear();
  }

  removePower(power: string): void {
    for (let i = 0; i < this.powers.length; i++) {
      if (this.powers.at(i).value === power) {
        this.powers.removeAt(i);
      }
    }
  }

  get powers() {
    return this.formGroup.controls["powersControl"] as FormArray;
  }

  clearForm(): void {
    this.formGroup.reset();
    this.powers.clear();

    this.superpowers.forEach(el => {
      this.powers.push(this.builder.control(el));
    });
  }

}
