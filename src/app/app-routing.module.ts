import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { FormComponent } from './form/form.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationFormComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      {
        path: '',
        children: [
          { path: '', component: DashboardComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'book', loadChildren: () => import('./book/book-routing.module').then(m => m.BookRoutingModule) },
          { path: 'heroes', component: HeroesComponent },
          { path: 'profile/:id', component: HeroDetailComponent },
          { path: 'form', component: FormComponent },
          { path: '**', redirectTo: 'book', pathMatch: 'full' },
        ]
      },
    ]
  },
  //{ path: 'dashboard', component: DashboardComponent },
  // { path: 'book', loadChildren: () => import('./book/book-routing.module').then(m => m.BookRoutingModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
