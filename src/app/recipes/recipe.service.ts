import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { Ingredient } from "./../shared/ingredient.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      "Burger",
      "this is a test",
      "https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/11/gourmet-burger-1024x666.jpg",
      [
        new Ingredient("Buns", 2),
        new Ingredient("Mayo", 1),
        new Ingredient("Hamburger Patty", 4)
      ]
    ),
    new Recipe(
      "Steak and Fries",
      "this is a test 2",
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Flickr_-_cyclonebill_-_B%C3%B8f_med_pommes_frites_%281%29.jpg",
      [new Ingredient("Steak", 1), new Ingredient("Potatoes", 2)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addMultipleIngredients(ingredients);
  }

  getId(recipe: Recipe) {
    return this.recipes.indexOf(recipe);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
