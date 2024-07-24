import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../partials/search/search.component";
// Import RatingModule if it is available and necessary

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, SearchComponent],  // Ensure imports are correct
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.foods = this.foodService.getAllbySearchTerm(params.searchTerm);
      }
      else{
        this.foods = foodService.getAll();
      }

    });
  }
}
