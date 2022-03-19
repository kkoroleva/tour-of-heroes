import { Component, OnInit } from '@angular/core';
//import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  page: number;
  constructor() {
    this.page = 1;
  }

  ngOnInit(): void {
  }

}
