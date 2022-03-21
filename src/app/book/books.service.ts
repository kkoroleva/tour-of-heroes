import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { merge, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root' //как ограничить сервис только модулем?
})
export class BooksService {

  private booksUrl = 'api/books';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getSet1() {
    return this.http.get<any>(this.booksUrl).pipe(map((data: any) => { return data.set1.data }));
  }
  getSet2() {
    return this.http.get<any>(this.booksUrl).pipe(map((data: any) => { return data.set2.data }));
  }
}
