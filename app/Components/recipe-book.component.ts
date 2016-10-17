import { Component } from '@angular/core';
import {RecipeService} from "./recipes/index";

@Component({
    moduleId: module.id,
    selector: 'sa-recipe-book-app',
    templateUrl: 'recipe-book.component.html',
    providers: [ RecipeService ]
})
export class RecipeBookAppComponent {
}