import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/models/cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navCart:Cart;

  constructor(cartService:CartService) { 
    this.navCart=cartService.cartToList;
  }

  ngOnInit(): void {

  }

}
