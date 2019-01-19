import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RecipeListComponent } from "src/app/recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "src/app/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipesRoutingModule } from "src/app/recipes/recipes-routing.module";

@NgModule({
  declarations: [
    RecipesComponent,
    SelectRecipeComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RecipesRoutingModule]
})
export class RecipesModule {}
