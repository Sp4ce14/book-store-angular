import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AllBooksComponent } from './components/all-books/all-books.component';

const routes: Routes = [
  {
    path: 'public', component: PublicComponent, children: [
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-details/:id', component: BookDetailsComponent }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
