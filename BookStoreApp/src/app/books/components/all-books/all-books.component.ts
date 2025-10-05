import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book-service.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  private _pageTitle: string = '';
  public books: BookModel[] = [];

  public set pageTitle(value: string) {
    this._pageTitle = value;
  }
  public get pageTitle() {
    return this._pageTitle;
  }

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    }
  }


