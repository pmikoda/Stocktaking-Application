import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from "./Components/shopping-list/index";
import { RecipesComponent } from "./Components/recipes/recipes.component";
import { RECIPE_ROUTES } from "./Components/recipes/recipes.routes";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
    {path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
