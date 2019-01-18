import { Ingredient } from "./../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatoes", 10)
  ];

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addMultipleIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(newIng: Ingredient, index: number) {
    this.ingredients[index] = newIng;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    // debugger;
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
