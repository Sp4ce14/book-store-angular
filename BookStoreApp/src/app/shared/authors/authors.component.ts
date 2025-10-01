import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  @Input() data: string | undefined;
  @Input() showAuthors: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  public setData(value: string): void{
    this.data = value;
  }
}
