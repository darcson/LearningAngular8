import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shoppingListContainer/shoppingList/shoppingList.component';
import { ShoppingListEditComponent } from './header/shoppingListContainer/shoppingListEdit/shoppingListEdit.component';
import { RecipeListComponent } from './header/recipeBookContainer/recipeList/recipeList.component';
import { ShoppingListContainerComponent } from './header/shoppingListContainer/shoppingListContainer.component';
import { RecipeBookContainerComponent } from './header/recipeBookContainer/recipeBookContainer.component';
import { RecipeItemComponent } from './header/recipeBookContainer/recipeItem/recipeItem.component';
import { RecipeDetailComponent } from './header/recipeBookContainer/recipeDetail/recipeDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    ShoppingListContainerComponent,
    RecipeBookContainerComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
