"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var index_1 = require('./Components/index');
var index_2 = require("./Components/recipes/index");
var index_3 = require("./Components/recipes/recipe-list/index");
var index_4 = require("./Components/recipes/recipe-detail/index");
var index_5 = require("./Components/shopping-list/index");
var index_6 = require("./Directives/index");
var shopping_list_service_1 = require("./Components/shopping-list/shopping-list.service");
var recipe_service_1 = require("./Components/recipes/recipe.service");
var app_routes_1 = require("./app.routes");
var index_7 = require("./Components/recipes/index");
var index_8 = require("./Components/recipes/recipe-edit/index");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [index_1.RecipeBookAppComponent, index_1.HeaderComponent, index_2.RecipesComponent, index_3.RecipeItemComponent,
                index_3.RecipeListComponent, index_5.ShoppingListComponent, index_5.ShoppingListAddComponent, index_4.RecipeDetail,
                index_6.DropdownDirective, index_7.RecipeStartComponent, index_8.RecipeEditComponent],
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing],
            providers: [shopping_list_service_1.ShoppingListService, recipe_service_1.RecipeService],
            bootstrap: [index_1.RecipeBookAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map