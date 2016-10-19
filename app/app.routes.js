"use strict";
var router_1 = require('@angular/router');
var index_1 = require("./Components/shopping-list/index");
var recipes_component_1 = require("./Components/recipes/recipes.component");
var recipes_routes_1 = require("./Components/recipes/recipes.routes");
var APP_ROUTES = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: recipes_component_1.RecipesComponent, children: recipes_routes_1.RECIPE_ROUTES },
    { path: 'shopping-list', component: index_1.ShoppingListComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map