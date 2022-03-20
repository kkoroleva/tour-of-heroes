import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { BooksData } from '../book-mock';
import { BooksService } from '../books.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BookTableComponent implements OnInit {

  booksData: Book[] = [];
  bookColumns: string[] = [];
  booksDataLength: number = 0;
  expandedElement: Book | null = null;

  constructor(private booksService: BooksService) {

  }

  /*getBooks() {
    this.booksService.getBooks().subscribe((booksData) => this.booksData = booksData);
    console.log(this.booksData);
  }*/

  ngOnInit(): void {
    //this.getBooks();
    this.booksData = BooksData;
    this.bookColumns = ['id', 'title', 'releasedBooks'];
    this.booksDataLength = this.booksData.length;
  }

  getColumnNameStraight(str: string): string {
    return str === 'id' ? 'ID' : str === 'title' ? 'Название' : str === 'releasedBooks' ? 'Продано (шт.)' : '';
  }

  getSoldNumber(): number {
    return this.booksData.map(book => book.releasedBooks).reduce((acc, value) => acc + value, 0);
  }
}
