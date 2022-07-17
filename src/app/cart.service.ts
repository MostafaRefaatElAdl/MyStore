import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Cart } from 'src/models/cart';
import { OrderItem } from 'src/models/order';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartToList:Cart;
  constructor(private http: HttpClient) {
  this.cartToList=new Cart();
   }

   addToCart(userOrder:OrderItem){
    this.cartToList.orders.push(userOrder);
  }

  removeFromCart(product:Product, event:EventEmitter<number>){
      for (let i = 0; i < this.cartToList.orders.length; i++) {
        if (this.cartToList.orders[i].product.id == product.id) {
         event.emit(product.price * this.cartToList.orders[i].quantity);
          this.cartToList.orders.splice(i,1);
        }
    } 
  }

  changeQuantity(userChangedOrder:OrderItem){
    for (let i = 0; i < this.cartToList.orders.length; i++) {
      if (this.cartToList.orders[i].product.id == userChangedOrder.product.id) {
        this.cartToList.orders[i].quantity = userChangedOrder.quantity
      } ;
    }
  }

  calcPrice(userPrice:number): number{
    userPrice=0;
    for (let i = 0; i < this.cartToList.orders.length; i++) {
      userPrice +=
        this.cartToList.orders[i].product.price *
        this.cartToList.orders[i].quantity;
    }
    userPrice = parseFloat(userPrice.toFixed(2));
    return userPrice;
  }

  resetCart(){
    this.cartToList.orders=[];
  }
}
