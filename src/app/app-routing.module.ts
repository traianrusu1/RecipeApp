import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "src/app/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "src/app/auth/signin/signin.component";
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/recipes"
  },
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
  },
  {
    path: "shopping-list",
    component: ShoppingListComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "signin",
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
