import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Set1, Set2 } from "./book";



@Injectable({
  providedIn: 'root' //как ограничить сервис только модулем?
})
export class BooksService {

  private booksUrl = 'api/books';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getSet1() {
    return this.http.get<Array<Set1>>(this.booksUrl).pipe(map((data: any) => { return data.set1.data }));
  }
  getSet2() {
    return this.http.get<Array<Set2>>(this.booksUrl).pipe(map((data: any) => { return data.set2.data }));
  }
}
