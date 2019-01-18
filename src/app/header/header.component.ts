import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { DataStorageService } from "./../shared/data-storage.service";
import { RecipeService } from "src/app/recipes/recipe.service";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() linkClicked = new EventEmitter<string>();

  constructor(
    private dataService: DataStorageService,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onSave() {
    this.dataService.saveData(this.recipeService.getRecipes()).subscribe(
      (response: any[]) => {
        console.log(response);
      },
      error => {}
    );
  }

  onFetch() {
    this.dataService.getData();
  }
  onLogout() {
    this.authService.signoutUser();
  }
}
