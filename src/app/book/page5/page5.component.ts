import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

  id: number;

  constructor() {
    this.id = 5;
  }

  ngOnInit(): void {
  }

}
