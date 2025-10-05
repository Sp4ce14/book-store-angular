import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BooksComponent } from 'src/app/books/books.component';
import { BookService } from 'src/app/books/services/book-service.service';
import { BookModel } from 'src/app/books/models/book.model';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  public model: any;
  public showDate: boolean = false;
  public prices: any[] = [
    { value: 100 },
    { value: 200 },
    { value: 300 },
    { value: 400 },
  ]

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.model = {
      title: '',
      totalPages: 300,
      author: 'Add Author',
      isPublished: false,
      publishedOn: undefined,
      price: {
        currency: '$',
        value: 300
      }
    }
  };

  public addABook(): void {
    console.log(this.model);
    if (this.form.valid) {
      this.bookService.addBook(this.model);
    }
    else {
      alert('Invalid submission');
    }

  }
  public toggleDate(toggle: MatSlideToggle): void {
    if (toggle.checked == false) {
      this.showDate = true;
    }
    else {
      this.showDate = false;
    }
  }
}
