import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { BookComponent } from './book/book/book.component';
import { BookModule } from './book/book.module';

import { routesChildren } from './book/book-routing.module';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile/:id', component: HeroDetailComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'book', component: BookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routesChildren)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
