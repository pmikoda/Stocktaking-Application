import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";

@Component({
    moduleId: module.id,
    selector: 'sa-recipe-detail',
    templateUrl: 'recipe-detail.component.html',
    providers: [ ShoppingListService ]
})

export class RecipeDetail implements OnInit{
    @Input() selectedRecipe: Recipe;

    constructor(private sls: ShoppingListService) {}

    ngOnInit(){
    }

    onAddToShoppingList() {
        this.sls.addItems((this.selectedRecipe.ingredients));
    }
}