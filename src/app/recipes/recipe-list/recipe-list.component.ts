import {Component} from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Test description', 'http://www.rd.com/wp-content/uploads/sites/2/2005/10/hamburger-noodle-casserole.jpg'),
        new Recipe('A Test Recipe', 'Test description', 'http://www.rd.com/wp-content/uploads/sites/2/2005/10/hamburger-noodle-casserole.jpg'),
    ];

}
