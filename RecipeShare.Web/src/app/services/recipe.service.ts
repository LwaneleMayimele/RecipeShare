import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://localhost:7145/api/recipes';

  constructor(private readonly http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Recipe>(url);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    const url = `${this.apiUrl}/${recipe.id}`;
    return this.http.put(url, recipe);
  }

  deleteRecipe(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
