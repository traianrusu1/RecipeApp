import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { Recipe } from "./../recipes/recipe.model";
import { RecipeService } from "./../recipes/recipe.service";
import { AuthService } from "src/app/auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  saveData(data: Recipe[]) {
    const token = this.authService.getToken();

    return this.http
      .put("https://mytest-f013e.firebaseio.com/data.json?auth=" + token, data)
      .pipe(
        map((response: Response) => {
          const newData = response.json();
          return newData;
        })
      );
  }

  getData() {
    const token = this.authService.getToken();

    return this.http
      .get("https://mytest-f013e.firebaseio.com/data.json?auth=" + token)
      .pipe(
        map((response: Response) => {
          let recipes = response.json();
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
