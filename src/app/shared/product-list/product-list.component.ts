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
  public productsCheckout: Product[] = [];
  public product: undefined | Product;
  public productQuantity: number = 1;
  public quantity: number = 1;
  

  constructor(
    private router: Router,
    private productsService: ProductsService   
  ) {}

  public ngOnInit(): void {
    this.showProducts();   
  }

  public showProducts(): void {
    console.log("Chamou")
    this.productsService
      .getProducts()
      .subscribe((products) => {
        let productsObserver: any[] = products;
        this.products = productsObserver
      })
  }

  addToCart() {
    if(this.product) {
      console.log("Chamou")
      this.product.quantity = this.productQuantity;
      if(localStorage.getItem('user')) {
        this.productsService.localAddToCart(this.product);
      }
    }
  }

  handleQuantity(val:string, product: Product) {
    if(val==='plus') {
      this.productQuantity++;
      this.productsCheckout.push(product);
      
    } else {
      if(!(this.productQuantity <= 0))
        this.productQuantity-- ;
        this.productsCheckout.pop();
      }
      product.quantity = this.productQuantity;
      console.log("Adicionando o produto: " , product)
      localStorage.setItem('checkout', JSON.stringify(this.productsCheckout));
  }
    
}
