import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: 'recipeList.component.html',
    styleUrls: ['recipeList.component.css']
})

export class RecipeListComponent implements OnInit {
    recipes: RecipeModel[] = [
        new RecipeModel('Chicken', 'aaaaaaaaaaaaaaaaaaaaa', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beef-stew-slow-cooker.jpg'),
        new RecipeModel('Tikka', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-3-1.jpg'),
        new RecipeModel('Massala', 'A pipa do vovo nao sobe mais', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2012/11/Basic-mince-recipe-620x408.jpg')
    ];
    constructor() { }

    ngOnInit() { }
}
