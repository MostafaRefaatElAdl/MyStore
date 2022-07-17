import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/models/cart';
import { OrderItem } from 'src/models/order';
import { Product } from 'src/models/product';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() productToShow:Product=new Product();
  @Input() listProduct:boolean=true;
  @Input() userSelectedValue:number = 1;
  @Output() decrees: EventEmitter<number> = new EventEmitter;
  @Output() refreshPrice: EventEmitter<OrderItem> = new EventEmitter;
  userQuantity:number [] = [1,2,3,4,5,6];
  userOrder:OrderItem;
  displayStyle:string = "none";
  constructor(private productService:ProductService, private cartService:CartService) { 
    this.userOrder=new OrderItem();
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.userOrder.product= this.productToShow;
    this.userOrder.quantity= this.userSelectedValue;
    this.cartService.addToCart(this.userOrder);
    this.displayStyle = "block"
  }

  removeFromCart(){
    if (confirm(`Are You Sure You want to delete ${this.productToShow.name} from cart?`)) {
      this.cartService.removeFromCart(this.productToShow,this.decrees)
    } 
  }

  quantityChanged(newQuantity:number){
    this.userOrder.product= this.productToShow;
    this.userOrder.quantity= newQuantity;
    this.refreshPrice.emit(this.userOrder);
  }

  closePopup() {
    this.displayStyle = "none";
  }

}
