import { Injectable } from '@angular/core';
import { Book } from './book';
import { BooksData } from './book-mock';
import { Observable, of, Subscription } from 'rxjs';
import { merge, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root' //как ограничить сервис только модулем?
})
export class BooksService {

  private booksUrl = 'api/books';  // URL to web api

  set1: [];
  set2: [];
  //sets: [];

  constructor(private http: HttpClient) {
    this.set1 = [];
    this.set2 = [];
    const sub1: Subscription = this.getBooks().subscribe(data => {
      this.set1 = data.set1.data;
      console.log(this.set1);
    });
    const sub2: Subscription = this.getBooks().subscribe(data => {
      this.set2 = data.set2.data;

      this.set2.forEach(el => {
        console.log(el);
      });
      console.log(typeof this.set2);
      console.log(this.set2.length);
     // console.log(this.set2[0]);
    });
  }

  getSet(): void {
    let set1: Subscription = this.getBooks().subscribe(data => {
      set1 = data.set1.data;
      console.log(this.set1);
      return set1;
    });
    console.log(set1);
  }

  getBooks() {
    let temp;
    return this.http.get<any>(this.booksUrl);
  }
}
