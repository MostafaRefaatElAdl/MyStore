import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/models/cart';
import { OrderItem } from 'src/models/order';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
  cartOrders: Cart;
  totalPrice: number = 0;
  userName:string="";
  userAddress:string="";
  creditCard:string="";

  constructor(private fb: FormBuilder, private cartService: CartService, private router: Router) {
    this.cartOrders = cartService.cartToList;
  }


  
  ngOnInit(): void {
    this.calcPrice()
  }

  //It fires when deleting from product-item component
  decreesTotalPrice(productPrice:number){
    this.totalPrice-=productPrice;
    this.totalPrice= parseFloat (this.totalPrice.toFixed(2));
  }

  //It fires when changing quantity from product-item component
  changePrice(userChangedOrder:OrderItem){
    this.cartService.changeQuantity(userChangedOrder);
    this.calcPrice()
  }

  calcPrice(){
    this.totalPrice=this.cartService.calcPrice(this.totalPrice);
  }

  submitOrder(){
    this.router.navigate(['confirmation'],{ queryParams: {FullName:this.userName, price:this.totalPrice} })
    this.cartService.resetCart();
    }


}
