import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('McD Burger', 'This is McD Burger', 
      'https://hhp-blog.s3.amazonaws.com/2019/07/burger-300x210.jpg'),
    new Recipe('Burger King', 'This is Burger King', 
      'https://hhp-blog.s3.amazonaws.com/2019/07/burger-300x210.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
