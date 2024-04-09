import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {


  constructor(private router: Router) {}

  public ngOnInit(): void {}
  
  public showAgreement(): void {
    this.router.navigate(['/agreement']);
  }

}
