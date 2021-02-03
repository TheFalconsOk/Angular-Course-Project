import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-r-items',
  templateUrl: './r-items.component.html',
  styleUrls: ['./r-items.component.css']
})
export class RItemsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
