import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods
    
  }

  getAllbySearchTerm(term:string):Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(term.toLowerCase()))

   }

  
  
  
}
