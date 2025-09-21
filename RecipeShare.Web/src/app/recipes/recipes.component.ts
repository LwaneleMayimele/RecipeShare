import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../services/recipe.service';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  imports:[UpperCasePipe,RouterLink, CommonModule],
  standalone: true
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  selectedRecipe?: Recipe;

  constructor(private readonly recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  onDelete(recipe: Recipe): void {
    if (confirm(`Are you sure you want to delete ${recipe.title}?`)) {
      this.recipeService.deleteRecipe(recipe.id!)
        .subscribe(() => {
          this.recipes = this.recipes.filter(r => r.id !== recipe.id);
          if (this.selectedRecipe === recipe) {
            this.selectedRecipe = undefined;
          }
        });
    }
  }
}
