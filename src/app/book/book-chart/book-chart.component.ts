import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Book, Set1, Set2 } from "../book";
import { BooksService } from '../books.service';

import { forkJoin, Observable, Subscription } from 'rxjs';

import Chart from 'chart.js/auto';
import { ChartConfiguration } from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-book-chart',
  templateUrl: './book-chart.component.html',
  styleUrls: ['./book-chart.component.scss']
})
export class BookChartComponent implements OnInit, AfterViewInit {

  config: ChartConfiguration = {
    type: 'bar',
    data: {
      datasets: [],
    },
  };
  booksData: Book[] = [];
  labels: string[] = [];
  sold: number[] = [];
  @ViewChild('bookChart') canvas!: ElementRef;
  @ViewChild('RandomButton') rndButton!: ElementRef;
  rndParameter: number[] = [];
  chart: Chart = new Chart(document.createElement('canvas'), this.config);

  constructor(private booksService: BooksService) {
    this.drawCharts();
  }

  ngOnInit(): void { }
  ngAfterViewInit(): void { }

  getBooksData(): Observable<[Set1[], Set2[]]> {
    return forkJoin<[Set1[], Set2[]]>([this.booksService.getSet1(), this.booksService.getSet2()]);
  }

  mergeData(value: [Set1[], Set2[]]): Array<Book> {
    let set1: Set1[] = value[0];
    let set2: Set2[] = value[1];
    let res: Array<Book> = [];

    set1.forEach(el => {
      set2.forEach(mel => {
        if (el['id'] === mel['id']) {
          res.push(Object.assign({}, el, mel));
        }
      });
    });
    return res;
  }

  genRandParamether(): number[] {
    let temp: number[] = [];
    for(let i = 0; i < this.booksData.length; i++) {
      temp.push(Math.ceil(Math.random()*Math.max(...this.sold)));
    }
    return temp;
  }

  drawCharts(): void {
    this.getBooksData().subscribe(value => {
      this.booksData = this.mergeData(value);
      this.labels = this.booksData.map(book => book.title);
      this.sold = this.booksData.map(book => book.qtyRelease);

      this.rndParameter = this.genRandParamether();

      this.config = {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            label: "Sold books",
            data: this.sold,
          }, {
            label: "Random paramether",
            data: this.rndParameter,
            type: 'line',
          }],
        },
        options: {
          responsive: true,
        },
      };

      this.chart = new Chart(this.canvas.nativeElement, this.config);
    });
  }

  rndButtonClickHandler(event: Event) {
    event.preventDefault();
    this.chart.data.datasets[1].data = this.genRandParamether();
    this.chart.update();
  }
}
