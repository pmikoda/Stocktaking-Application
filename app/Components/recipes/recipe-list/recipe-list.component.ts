import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from "../recipe";

@Component({
    moduleId: module.id,
    selector: 'sa-recipe-list',
    templateUrl: 'recipe-list.component.html',
})

export class RecipeListComponent implements OnInit{
    recipes: Recipe[] = [];
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipe = new Recipe('Dummy', 'Dummy', 'app/Images/PC.jpg');

    constructor() {}

    ngOnInit(){
    }

    onSelected(recipe: Recipe){
        this.recipeSelected.emit(recipe);
    }
}