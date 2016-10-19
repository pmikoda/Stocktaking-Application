import { Routes } from "@angular/router"
import { RecipeStartComponent } from "./recipe-start.component";
import { RecipeDetail } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";

export const RECIPE_ROUTES: Routes = [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetail },
    { path: ':id/edit', component: RecipeEditComponent }
]