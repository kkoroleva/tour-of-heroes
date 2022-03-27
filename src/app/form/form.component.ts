import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { User } from './user';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {CyrilicCheckValidator} from '../validators/CyrrilicCheck.validator';

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

  readonly superpowers: string[] = ['жизнерадостность', 'интеллект', 'заинтересованность'];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;

  constructor(private builder: FormBuilder) {

    this.formGroup = this.builder.group({
      firstNameControl: new FormControl('', [Validators.required]),
      lastNameControl: new FormControl('', [Validators.required, Validators.pattern(/[А-яЁё]/)]),
      fatherNameControl: new FormControl('', [Validators.pattern(/[А-яЁё]/)]),
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
    if (!this.powers.value.includes(event.value) && event.value) {
     this.powers.push(new FormControl(event.value));
    }
    event.chipInput!.clear();
  }

  removePower(idx: number): void {
    this.powers.removeAt(idx);
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
