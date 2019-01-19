import { RecipeDetailComponent } from "src/app/recipes/recipe-detail/recipe-detail.component";
import { AuthGuard } from "./../auth/auth-guard.service";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";
import { RecipesComponent } from "./recipes.component";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const recipeRoutes: Routes = [
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: SelectRecipeComponent
      },
      {
        path: "new",
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ":id",
        component: RecipeDetailComponent
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
