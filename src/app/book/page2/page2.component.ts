import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  id: number;

  constructor() {
    this.id = 2;
  }

  ngOnInit(): void {
  }

}
