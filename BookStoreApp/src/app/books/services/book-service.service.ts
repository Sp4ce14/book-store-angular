import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  public getBooks(): BookModel[] {
    return [
  {
    "id": 1,
    "title": "The Pragmatic Programmer",
    "totalPages": 352,
    "author": "Andrew Hunt, David Thomas",
    "price": {
      "currency": "USD",
      "value": 45.99
    }
  },
  {
    "id": 2,
    "title": "Clean Code",
    "totalPages": 464,
    "author": "Robert C. Martin",
    "price": {
      "currency": "USD",
      "value": 39.99
    }
  },
  {
    "id": 3,
    "title": "Introduction to Algorithms",
    "totalPages": 1312,
    "author": "Thomas H. Cormen",
    "price": {
      "currency": "USD",
      "value": 89.50
    }
  },
  {
    "id": 4,
    "title": "Design Patterns: Elements of Reusable Object-Oriented Software",
    "totalPages": 395,
    "author": "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    "price": {
      "currency": "USD",
      "value": 54.95
    }
  },
  {
    "id": 5,
    "title": "Refactoring: Improving the Design of Existing Code",
    "totalPages": 448,
    "author": "Martin Fowler",
    "price": {
      "currency": "USD",
      "value": 47.00
    }
  }
]
}
}

