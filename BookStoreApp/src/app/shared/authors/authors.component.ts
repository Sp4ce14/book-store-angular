import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor() { }
  @Output() data = new EventEmitter<string>();
  ngOnInit(): void {
  }
  public btn(): void{
    this.data.emit('hello from child aka author');
  }
}
