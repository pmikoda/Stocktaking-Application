import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: 'sa-shopping-list',
    templateUrl: 'shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit{
    items: Ingredient[] = [];

    constructor() {}

    ngOnInit(){

    }
}