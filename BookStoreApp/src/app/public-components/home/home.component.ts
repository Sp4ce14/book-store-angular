import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthorsComponent } from 'src/app/shared/authors/authors.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('author') public author: AuthorsComponent

  constructor() { }
  public digit: string = "this is data coming from home to authors";
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.author.setData('60');
    }, 0)
  }

}
