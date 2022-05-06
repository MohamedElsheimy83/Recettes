import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { Recipes } from '../mock-recipes';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
})
export class ListRecipesComponent implements OnInit {
  recipes = Recipes;

  constructor() {}

  selectedRecipe?: Recipe;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  ngOnInit(): void {}
}
