import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { SListComponent } from './shopping/s-list/s-list.component';
import { ListEditComponent } from './shopping/list-edit/list-edit.component';
import { RListComponent } from './recipeBook/r-list/r-list.component';
import { RItemsComponent } from './recipeBook/r-items/r-items.component';
import { RDetailsComponent } from './recipeBook/r-details/r-details.component';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipeBookComponent,
    SListComponent,
    ListEditComponent,
    RListComponent,
    RItemsComponent,
    RDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
