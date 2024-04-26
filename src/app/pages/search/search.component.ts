
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

   public searchResult: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.paramMap.get('query');
    query && this.productsService.searchProducts(query).subscribe((result)=> {
      this.searchResult = result;
    })
  }
}
