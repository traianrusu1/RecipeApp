import { Component, OnInit } from "@angular/core";
import { RecipeService } from "src/app/recipes/recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe;
  recipeIndex;
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // this.selectedRecipe = this.recipeService.getRecipe(
    //   this.activatedRoute.snapshot.params["id"]
    // );

    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipeIndex = params["id"];
      this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
    });
  }

  onAddToShoppingListClick() {
    this.recipeService.addIngredientsToShoppingList(
      this.selectedRecipe.ingredients
    );
  }

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.activatedRoute });
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeIndex);
    this.router.navigate(["/recipes"]);
  }
}
