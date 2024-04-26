import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.API_PATH}/products`);
  }

  public localAddToCart(data:Product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    } 
  }

  public searchProducts(query:string) {
    return this.httpClient.get<Product[]>(`http://localhost:3000/products?q=${query}`);
  }

}
