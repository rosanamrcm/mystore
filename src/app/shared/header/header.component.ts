import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  public user: User = {id: null, name: '', surname: '', email:'', password: ''};
  public users: User[] = [];
  public isAuthenticated: boolean = false;
  public isMenuOpened: boolean = false;

  constructor (
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userAuthenticated();
  }

  public userAuthenticated(): void {
    if (!!localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem("user") || "");
      console.log(this.user)
      this.isAuthenticated = true;
    }
    else {
      this.isAuthenticated = false;
    }
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.isAuthenticated = false;
  }

  public toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  public requests(): void {
    this.router.navigate(['/requests']);
  }

  public exchanges(): void {
    this.router.navigate(['/exchanges']);
  }

  public favorites(): void {
    this.router.navigate(['/favorites']);
  }

  
  public account(): void {
    this.router.navigate(['/account']);
  }

  public address(): void {
    this.router.navigate(['/address']);
  }

  public creditCard(): void {
    this.router.navigate(['/credit-card']);
  }

}
