import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
    moduleId: module.id,
    selector: 'sa-recipe-detail',
    templateUrl: 'recipe-detail.component.html'
})

export class RecipeDetail implements OnInit{
    @Input() selectedRecipe: Recipe;

    constructor() {}

    ngOnInit(){
    }
}