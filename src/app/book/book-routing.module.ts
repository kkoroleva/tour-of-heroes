import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';


export const routesChildren: Routes = [
  { path: '', redirectTo: '/book', pathMatch: 'full'},
  {
    path: '', component: BookComponent,
    children: [
      { path: 'page/1', component: Page1Component },
      { path: 'page/2', component: Page2Component },
      { path: 'page/3', component: Page3Component },
      { path: 'page/4', component: Page4Component },
      { path: 'page/5', component: Page5Component },
      { path: '**', component: BookComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesChildren)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
