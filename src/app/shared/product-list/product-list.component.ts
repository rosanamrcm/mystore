import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductsService } from 'src/app/service/products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  
  public products: Product[] = [];
  

  constructor(
    private router: Router,
    private productsService: ProductsService   
  ) {}

  public ngOnInit(): void {
    this.getProducts();   
  }

  public getProducts(): void {
    console.log("Chamou")
    this.productsService
      .getProducts()
      .subscribe((products) => {
        let productsObserver: any[] = products;
        this.products = productsObserver
      })
  }

}
