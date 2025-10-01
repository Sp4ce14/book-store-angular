import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book-service.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.css']
})
export class RecentBooksComponent implements OnInit {

  public books: BookModel[] = [];
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.books = this.bookService.getRecentBooks()
  }

}
