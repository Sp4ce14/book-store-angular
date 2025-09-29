import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book-service.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    const allBooks: BookModel[] = this.bookService.getBooks();
    allBooks.forEach((b: BookModel) => {
      var obj = new BookModel(); 
        obj.id = b.id,
        obj.totalPages = b.totalPages,
        obj.title = b.title,
        obj.price = b.price,
        obj.author = b.author
        this.books.push(obj); 
    })
  }

}
