import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookAppComponent, HeaderComponent }  from './Components/index';
import { RecipesComponent } from "./Components/recipes/index";
import { RecipeItemComponent, RecipeListComponent } from "./Components/recipes/recipe-list/index";
import { RecipeDetail } from "./Components/recipes/recipe-detail/index";
import { ShoppingListComponent, ShoppingListAddComponent } from "./Components/shopping-list/index";
import { DropdownDirective } from "./Directives/index";
import { ShoppingListService } from "./Components/shopping-list/shopping-list.service";
import { RecipeService } from "./Components/recipes/recipe.service";
import { routing } from "./app.routes";
import { RecipeStartComponent } from "./Components/recipes/index";
import {RecipeEditComponent} from "./Components/recipes/recipe-edit/index";

@NgModule({
  declarations: [ RecipeBookAppComponent, HeaderComponent, RecipesComponent, RecipeItemComponent,
                  RecipeListComponent, ShoppingListComponent, ShoppingListAddComponent, RecipeDetail,
                  DropdownDirective, RecipeStartComponent, RecipeEditComponent ],
  imports:      [ BrowserModule, routing ],
  providers: [ ShoppingListService, RecipeService ],
  bootstrap:    [ RecipeBookAppComponent ]

})

export class AppModule { }
