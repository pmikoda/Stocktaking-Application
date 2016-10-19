import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/index";
import { ShoppingListService } from "./shopping-list.service";


@Component({
    moduleId: module.id,
    selector: 'sa-shopping-list',
    templateUrl: 'shopping-list.component.html',
})

export class ShoppingListComponent implements OnInit{
    items: Ingredient[] = [];

    constructor(private sls: ShoppingListService) {}

    ngOnInit(){
        this.items = this.sls.getItems();
    }
}