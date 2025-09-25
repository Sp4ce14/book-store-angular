import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

    public UserId: number = 0;
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.route.parent?.params.subscribe(param => {
        console.log(param);
        this.UserId = param['userId'];
      });
    }

}
