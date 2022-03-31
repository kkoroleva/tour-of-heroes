import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root' //как ограничить сервис только модулем?
})
export class AuthorisationService {

  private url = 'http://localhost:4200/api';  // URL to web api

  constructor(private http: HttpClient) {
  }

  reqAccess(login: string, password: string) {
    let temp = btoa([login, password].join(':'));

    return this.http.get<any>(this.url, {headers: {
      Authorization: `${btoa([login, password].join(':'))}`
    }});
  }
}
