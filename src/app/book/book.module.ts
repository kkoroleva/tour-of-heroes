import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Routing&Services*/
import { BookRoutingModule } from './book-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';

/*Components */
import { BookComponent } from './book/book.component';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookPaginationComponent } from './book-pagination/book-pagination.component';

/*Material UI*/
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


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
    HttpClientModule,
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BookRoutingModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    BookComponent,
  ],
  bootstrap: [],
})
export class BookModule { }
