import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { BookChartComponent } from '../book-chart/book-chart.component';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  page: number;
  constructor(public dialog: MatDialog) {
    this.page = 1;
  }

  ngOnInit(): void {
  }

  openBookChart(event: Event) {
    event.preventDefault();
    const cfg = new MatDialogConfig();
    cfg.disableClose = true;
    const dialogRef = this.dialog.open(BookChartComponent, cfg);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal window was closed');
    });

  }
}
