import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookAppComponent, HeaderComponent }  from './Components/index';
import { RecipesComponent } from "./Components/recipes/index";
import { RecipeItemComponent, RecipeListComponent } from "./Components/recipes/recipe-list/index";
import { RecipeDetail } from "./Components/recipes/recipe-detail/index";
import { ShoppingListComponent, ShoppingListAddComponent } from "./Components/shopping-list/index";
import { DropdownDirective } from "./Directives/index";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ RecipeBookAppComponent, HeaderComponent, RecipesComponent, RecipeItemComponent,
                  RecipeListComponent, ShoppingListComponent, ShoppingListAddComponent, RecipeDetail,
                  DropdownDirective ],
  bootstrap:    [ RecipeBookAppComponent ]
})

export class AppModule { }
