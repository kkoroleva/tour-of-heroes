import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Set1, Set2 } from "./book";


@Injectable({
  providedIn: 'root' //как ограничить сервис только модулем?
})
export class BooksService {

  private booksUrl = 'http://localhost:4200/api';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getSet1() {
    const temp = this.http.get<Array<Set1>>(`${this.booksUrl}/input-data.json`, {headers: {'Session': 'Set1Header'}});
    return temp.pipe(map((data: any) => {
      return data.set1.data }));
  }
  getSet2() {
    const temp = this.http.get<Array<Set2>>(`${this.booksUrl}/input-data.json`, {headers: {'Session': 'Set2Header'}});
    return temp.pipe(map((data: any) => {
      return data.set2.data }));
  }
}
