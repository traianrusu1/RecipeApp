import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, Output, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { RecipeService } from "./../recipe.service";
import { Recipe } from "./../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNew() {
    this.router.navigate(["new"], { relativeTo: this.activatedRoute });
  }
}
