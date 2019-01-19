import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { DataStorageService } from "./shared/data-storage.service";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";

import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
