import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  constructor (private router: Router) { }

  ngOnInit(): void {
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


