import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

import { BookTableComponent } from './book-table/book-table.component';


export const routesChildren: Routes = [
  {
    path: '', component: BookComponent,
    children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      {
        path: 'pages',
        children: [
          { path: '', component: Page1Component },
          { path: '1', component: Page1Component },
          { path: '2', component: Page2Component },
          { path: '3', component: Page3Component },
          { path: '4', component: Page4Component },
          { path: '5', component: Page5Component },
          { path: '**', redirectTo: 'page/1', pathMatch: 'full'},
        ],
      },
      { path: 'table', component: BookTableComponent },
    ]
  }];

@NgModule({
      imports: [RouterModule.forChild(routesChildren)],
      exports: [RouterModule]
    })

export class BookRoutingModule { }
