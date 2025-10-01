import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';

const routes: Routes = [
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-details/:id', component: BookDetailsComponent },
      { path: 'recent-books', component: RecentBooksComponent}
    ];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BooksRoutingModule { }
