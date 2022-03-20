import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  id: number;
  
  constructor() {
    this.id = 1;
  }

  ngOnInit(): void {

  }

}
