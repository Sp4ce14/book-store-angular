import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  constructor() { }
  private _books: BookModel[];

  @Input('bookData')
  set books(value: BookModel[] ){
    this._books = value; 
  }
  get books(){
    return this._books;
  }

  ngOnInit(): void {
  }

}
