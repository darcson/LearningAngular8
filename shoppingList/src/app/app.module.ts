import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import { HttpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shoppingListContainer/shoppingList/shoppingList.component';
import { ShoppingListEditComponent } from './header/shoppingListContainer/shoppingList/shoppingListEdit/shoppingListEdit.component';
import { RecipeListComponent } from './header/recipeBookContainer/recipeList/recipeList.component';
import { ShoppingListContainerComponent } from './header/shoppingListContainer/shoppingListContainer.component';
import { RecipeBookContainerComponent } from './header/recipeBookContainer/recipeBookContainer.component';
import { RecipeItemComponent } from './header/recipeBookContainer/recipeList/recipeItem/recipeItem.component';
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
    BrowserModule,
    FormsModule
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
