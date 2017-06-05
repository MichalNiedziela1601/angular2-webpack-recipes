import {Component} from '@angular/core';
import {Ingredient} from '../common/ingredients.model';
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Potato', 5), new Ingredient('Tomato',3)
    ];
}
