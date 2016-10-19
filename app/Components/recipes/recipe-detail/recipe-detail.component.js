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
var recipe_1 = require("../recipe");
var shopping_list_service_1 = require("../../shopping-list/shopping-list.service");
var router_1 = require("@angular/router");
var RecipeDetail = (function () {
    function RecipeDetail(sls, router) {
        this.sls = sls;
        this.router = router;
        this.recipeIndex = 1;
    }
    RecipeDetail.prototype.ngOnInit = function () {
    };
    RecipeDetail.prototype.onEdit = function () {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    };
    RecipeDetail.prototype.onDelete = function () {
        this.router.navigate(['/recipes']);
    };
    RecipeDetail.prototype.onAddToShoppingList = function () {
        this.sls.addItems(this.selectedRecipe.ingredients);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', recipe_1.Recipe)
    ], RecipeDetail.prototype, "selectedRecipe", void 0);
    RecipeDetail = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sa-recipe-detail',
            templateUrl: 'recipe-detail.component.html',
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, router_1.Router])
    ], RecipeDetail);
    return RecipeDetail;
}());
exports.RecipeDetail = RecipeDetail;
//# sourceMappingURL=recipe-detail.component.js.map