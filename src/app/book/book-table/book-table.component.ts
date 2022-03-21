import { Component, OnInit } from '@angular/core';
import { Book, Set1, Set2 } from "../book";
import { BooksService } from '../books.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { forkJoin, Subscription } from 'rxjs';

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
  expandedElement: Book | null = null;

  set1: Set1[] = [];
  set2: Set2[] = [];

  constructor(private booksService: BooksService) {

  }

  getSet1(): Subscription {
    return this.booksService.getSet1().subscribe((booksData) => {
      this.set1 = booksData;
    });
  }
  getSet2(): Subscription {
    return this.booksService.getSet2().subscribe((booksData) => {
      this.set2 = booksData;
    });
  }
  getBooksData() {
    return forkJoin(this.booksService.getSet2(), this.booksService.getSet1()).subscribe(value => {
      this.set1 = value[0];
      this.set2 = value[1];

      this.set1.forEach(el => {
        this.set2.forEach(mel => {
          if (el['id'] === mel['id']) {
            let temp: Book = Object.assign({}, el, mel);
            this.booksData.push(temp);
          }
        });
      });
      this.bookColumns = ['id', 'title', 'qtyRelease'];
    });
  }


  ngOnInit(): void {
    this.getBooksData();
  }

  getColumnNameStraight(str: string): string {
    return str === 'id' ? 'ID' : str === 'title' ? 'Название' : str === 'qtyRelease' ? 'Продано (шт.)' : '';
  }

  getSoldNumber(): number {
    return this.booksData.map(book => book.qtyRelease).reduce((acc, value) => acc + value, 0);
  }
}
