import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  productToShow:Product=new Product();
  id:number=0;

  constructor(private route:ActivatedRoute, productService:ProductService) { 
    productService.getProducts().subscribe({
      next: (x)=>{
        this.id = parseInt( this.route.snapshot.paramMap.get('id')!)
        this.productToShow=x.find(x=>x.id==this.id)!
      }
    })
  }

  ngOnInit(): void {
    
  }

}
