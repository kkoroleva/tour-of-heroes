import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { PassThrough } from 'stream';
import { AuthorisationService } from './authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {

  formGroup: FormGroup;

  constructor(private builder: FormBuilder, private auth: AuthorisationService) {
    this.formGroup = this.builder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  isInvalid(control: string): boolean {
    return this.formGroup.controls[control].invalid && this.formGroup.controls[control].touched;
  }

  onSubmit() {
    const log = this.formGroup.controls['login'].value;
    const pass = this.formGroup.controls['password'].value;
    console.log(pass);
    this.auth.authWithLoginAndPassword(log, pass).subscribe(response => {
      const token = response.json().idToken;
      console.log(token);
    });

    //this.formGroup.reset();
  }


}
