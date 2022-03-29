import { Injectable } from '@angular/core';
import { map, forkJoin } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Set1, Set2, Book } from "./book";


@Injectable({
  providedIn: 'root' //как ограничить сервис только модулем?
})
export class BooksService {

  private booksUrl = 'api/books';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getSet1() {
    const temp = this.http.get<Array<Set1>>(this.booksUrl, {headers: {'Session': 'Set1Header'}});
    return temp.pipe(map((data: any) => {
      console.log(this.http.get<Array<Set1>>(this.booksUrl));
      return data.set1.data }));
  }
  getSet2() {
    const temp = this.http.get<Array<Set2>>(this.booksUrl, {headers: {'Session': 'Set2Header'}});
    return temp.pipe(map((data: any) => {
      console.log(this.http.get<Array<Set2>>(this.booksUrl));
      return data.set2.data }));
  }
}
