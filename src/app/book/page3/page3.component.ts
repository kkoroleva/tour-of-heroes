import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  id: number;

  constructor() {
    this.id = 3;
  }

  ngOnInit(): void {
  }

}
