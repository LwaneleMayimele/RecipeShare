import { provideRouter, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'new-recipe', component: RecipeFormComponent },
  { path: 'edit-recipe/:id', component: RecipeFormComponent }
];


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
export class AppRoutingModule { }
