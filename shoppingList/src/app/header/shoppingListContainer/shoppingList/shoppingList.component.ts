import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../../shared/models/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
})

export class ShoppingListComponent implements OnInit {
    ingredients: IngredientModel[] = [
        new IngredientModel('Apples', 5),
        new IngredientModel('Tomatoes', 2),
        new IngredientModel('Lemon', 1),
    ];
    constructor() { }

    ngOnInit() { }
}
