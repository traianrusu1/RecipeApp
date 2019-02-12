import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Recipe } from "./../recipes/recipe.model";
import { RecipeService } from "./../recipes/recipe.service";
import { AuthService } from "src/app/auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  saveData(data: Recipe[]) {
    const token = this.authService.getToken();

    return this.httpClient
      .put("https://mytest-f013e.firebaseio.com/data.json", data)
      .pipe(
        map((response: Response) => {
          const newData = response.json();
          return newData;
        })
      );
  }

  getData() {
    const token = this.authService.getToken();

    return this.httpClient
      .get<Recipe[]>("https://mytest-f013e.firebaseio.com/data.json")
      .pipe(
        map(recipes => {
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              recipe["ingredients"] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
