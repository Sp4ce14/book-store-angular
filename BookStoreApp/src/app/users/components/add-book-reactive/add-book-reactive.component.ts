import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { BookService } from 'src/app/books/services/book-service.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css']
})
export class AddBookReactiveComponent implements OnInit {

  public showDate: boolean = false;
  public prices: any[] = [
    { value: 100 },
    { value: 200 },
    { value: 300 },
    { value: 400 },
  ]
  public currencies: any[] = [
    { value: 'PKR' },
    { value: 'USD' },
    { value: 'INR' },
    { value: 'CNY' },
  ]
  public addFormGroup: FormGroup;

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.formInit();
  }
  
  public formInit(): void {
    this.addFormGroup = new FormGroup({
      title: new FormControl("Ahmed's Book", Validators.required),
      totalPages: new FormControl(null, Validators.max(200)),
      author: new FormControl(),
      isPublished: new FormControl(),
      publishedOn: new FormControl(),
      price: new FormGroup({
        currency: new FormControl,
        value: new FormControl
      })
    })
  }

  public toggleDate(toggle: MatSlideToggle): void {
    const date = this.addFormGroup.get('publishedOn');
    if (toggle.checked == false) {
      date?.enable();
      this.showDate = true;
    }
    else {
      date?.disable();
      date?.reset();
      this.showDate = false;
    }
  }
  public saveBook(): void {
    console.log(this.addFormGroup.value);
    if (this.addFormGroup.valid) {
      this._bookService.addBook(this.addFormGroup.value);
    }
    else {
      alert('Invalid submission');
    }

  }
}
