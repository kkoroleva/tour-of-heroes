import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  id: number;

  constructor() {
    this.id = 4;
  }

  ngOnInit(): void {
  }

}
