import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "../shared/index";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Jednostka centralna', 'X17363723', 'app/Images/PC.jpg', [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ]),
        new Recipe('Oscyloskop', 'AX1221332', 'app/Images/oscyloskop.jpg', [])
    ];

    constructor() {}

    getRecipes() {
        return this.recipes;
    }
}