import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { BooksData } from '../book-mock';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  booksData: Book[] = [];
  bookColumns: string[] = [];
  booksDataLength: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.booksData = BooksData;
    this.bookColumns = ['id', 'title', 'sold'];
    this.booksDataLength = this.booksData.length;

  }
  getSoldNumber() {
    return this.booksData.map(book => book.releasedBooks).reduce((acc, value) => acc + value, 0);
  }
}
