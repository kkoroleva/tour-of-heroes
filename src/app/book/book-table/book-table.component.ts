import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Book } from "../book";
import { BooksData } from '../book-mock';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  booksData: Book[] | undefined;
  booksDataLength: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.booksData = BooksData;
    this.booksDataLength = BooksData.length;
  }

}
