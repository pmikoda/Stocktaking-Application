import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from "../recipe";
import { RecipeService } from "../index";

@Component({
    moduleId: module.id,
    selector: 'sa-recipe-list',
    templateUrl: 'recipe-list.component.html',
})

export class RecipeListComponent implements OnInit{
    recipes: Recipe[] = [];

    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService) {}

    ngOnInit(){
        this.recipes = this.recipeService.getRecipes();
    }

    onSelected(recipe: Recipe){
        this.recipeSelected.emit(recipe);
    }
}