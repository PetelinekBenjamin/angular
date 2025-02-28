import { Component } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from "../../partials/title/title.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [TitleComponent, CommonModule, RouterModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  cart!: Cart;

  constructor(private cartservice: CartService){
    this.cartservice.getCartObservable().subscribe(cart=>this.cart=cart)
  }

  removeFromCart(cartItem:CartItem): void {
    this.cartservice.removeFromCart(cartItem.food.id);

  }

  changeQuantity(cartItem:CartItem, quantityString:string): void{
    const quantity: number = parseInt(quantityString);
    this.cartservice.changeQuantity(cartItem.food.id, quantity)
  }

}
