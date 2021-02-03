import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-r-list',
  templateUrl: './r-list.component.html',
  styleUrls: ['./r-list.component.css']
})
export class RListComponent implements OnInit {
  @Output() RecipeDetailsRequested = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test recipe 1', 'this recipe is a test of my structure ', 'https://dinnerthendessert.com/wp-content/uploads/2017/02/Panda-Express-Beijing-Beef.jpg'),
    new Recipe('A Test recipe 2', 'this recipe is a test of my structure', 'https://dinnerthendessert.com/wp-content/uploads/2017/02/Panda-Express-Beijing-Beef.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  OnRecipeSelected(recipe: Recipe) {
    this.RecipeDetailsRequested.emit(recipe);}

}
