import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
import { Observable } from 'rxjs';
// Import RatingModule if it is available and necessary

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, SearchComponent, TagsComponent, NotFoundComponent],  // Ensure imports are correct
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute:ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        foodsObservable = this.foodService.getAllbySearchTerm(params.searchTerm);

        foodsObservable.subscribe((serverFood)=>{
          this.foods = serverFood
        })
      }
      else if(params.tag){
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);

        foodsObservable.subscribe((serverFood)=>{
          this.foods = serverFood
        })
      }
      else{
        foodsObservable = foodService.getAll();

        foodsObservable.subscribe((serverFood)=>{
          this.foods = serverFood
        })
      }

    });
  }
}
