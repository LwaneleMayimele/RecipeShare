import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../services/recipe.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  imports:[CommonModule, RouterModule,FormsModule],
  standalone: true
})
export class RecipeFormComponent implements OnInit {
  recipe: Recipe = { title: '', ingredients: '', steps: '', cookingTime: 0, dietaryTags: '' };
  isEditMode = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.getRecipe(Number(id));
    }
  }

  getRecipe(id: number): void {
    this.recipeService.getRecipe(id)
      .subscribe({
        next: (recipe) => this.recipe = recipe,
        error: (err) => this.errorMessage = 'Failed to load recipe.'
      });
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.recipeService.updateRecipe(this.recipe)
        .subscribe({
          next: () => this.goToRecipes(),
          error: (err) => this.handleError(err)
        });
    } else {
      this.recipeService.createRecipe(this.recipe)
        .subscribe({
          next: () => this.goToRecipes(),
          error: (err) => this.handleError(err)
        });
    }
  }

  public goToRecipes(): void {
    this.router.navigate(['/recipes']);
  }

  private handleError(error: any): void {
    console.error(error);
    // Simple error handling. You can parse the API error response here.
    this.errorMessage = 'An error occurred. Please check your input and try again.';
  }
}