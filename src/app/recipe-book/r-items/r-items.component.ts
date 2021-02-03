import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-r-items',
  templateUrl: './r-items.component.html',
  styleUrls: ['./r-items.component.css']
})
export class RItemsComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  recipeClicked() {
    console.log("clicked")
    this.recipeSelected.emit()
  }
  

  ngOnInit(): void {
  }

}
