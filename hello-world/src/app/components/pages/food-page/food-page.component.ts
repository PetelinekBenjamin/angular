import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterModule, CommonModule, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!:Food;

  constructor(activatedRoute:ActivatedRoute, foodService:FoodService, private cartService: CartService, private router: Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.id){
        foodService.getFoodById(params.id).subscribe((serverFood)=>{
          this.food = serverFood;
        });
      }
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
