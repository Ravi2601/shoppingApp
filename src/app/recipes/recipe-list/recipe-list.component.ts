import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('McD Burger', 'This is McD Burger', 
      'https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger-1024x666.jpg'),
    new Recipe('McD Burger', 'This is McD Burger', 
      'https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger-1024x666.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
