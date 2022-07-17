import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  productsToList:Product[]= [];
  subscribe: Subscription= new Subscription(); 

  constructor(productService:ProductService) { 
    productService.getProducts().subscribe({
      next:x=>this.productsToList=x
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
