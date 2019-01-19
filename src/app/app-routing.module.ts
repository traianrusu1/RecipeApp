import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "recipes",
    loadChildren: "./recipes/recipes.module#RecipesModule"
  },
  {
    path: "shopping-list",
    loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
