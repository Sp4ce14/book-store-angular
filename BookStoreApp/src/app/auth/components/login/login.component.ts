import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name: string = '';
  public email: string = '';
  public id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.name = param['name'];
      this.email = param['email'];
      this.id = param['id'];
    })
  }
  goToBookDetails(idi: number): void {
    this.router.navigate(['/public/book-details', idi], { queryParams: { name: 'ahmed' } })
  }
  goToSignup(): void {
    this.router.navigate(['auth/signup'])
  }

}
