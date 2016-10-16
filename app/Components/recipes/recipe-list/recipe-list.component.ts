import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from "../recipe";

@Component({
    moduleId: module.id,
    selector: 'sa-recipe-list',
    templateUrl: 'recipe-list.component.html',
})

export class RecipeListComponent implements OnInit{
    recipes: Recipe[] = [
        new Recipe('Jednostka centralna', 'X17363723', 'app/Images/PC.jpg', []),
        new Recipe('Oscyloskop', 'AX1221332', 'app/Images/oscyloskop.jpg', [])
    ];

    @Output() recipeSelected = new EventEmitter<Recipe>();
    constructor() {}

    ngOnInit(){
    }

    onSelected(recipe: Recipe){
        this.recipeSelected.emit(recipe);
    }
}