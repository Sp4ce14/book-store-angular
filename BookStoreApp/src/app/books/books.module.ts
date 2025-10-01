import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { SharedModule } from '../shared/shared.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent,
    BookCardComponent,
    RecentBooksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
