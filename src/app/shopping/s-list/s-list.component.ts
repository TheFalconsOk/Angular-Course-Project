import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../sharedAssets/ingredient.model';

@Component({
  selector: 'app-s-list',
  templateUrl: './s-list.component.html',
  styleUrls: ['./s-list.component.css']
})
export class SListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)];

  constructor() { }

  ngOnInit(): void {
  }

}
