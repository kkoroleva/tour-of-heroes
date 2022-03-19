import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookRoutingModule } from './book-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { BookTableComponent } from './book-table/book-table.component';
import { BookPaginationComponent } from './book-pagination/book-pagination.component';

@NgModule({
  declarations: [
    BookComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    BookTableComponent,
    BookPaginationComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  exports: [
    BookComponent,
  ],
  bootstrap: [],
})
export class BookModule { }
