import { Injectable, NgZone } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root' //как ограничить сервис только модулем?
})
export class AuthorisationService {

  private url = 'http://localhost:4200/api';  // URL to web api

  constructor(private http: HttpClient) {
  }

  authWithLoginAndPassword(email: string, password: string) {
    const apiKey = 'AIzaSyAkVbisyHF-RZBAttnIoQdIc-HAvKKwrHc';
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

    const body = JSON.stringify({ "email": email, "password": password, "returnSecureToken": true });
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.post<any>(url, body, options);
  }

  reqAccess(login: string, password: string) {
    let temp = btoa([login, password].join(':'));

    return this.http.get<any>(this.url, {headers: {
      Authorization: `${btoa([login, password].join(':'))}`
    }});
  }
}
