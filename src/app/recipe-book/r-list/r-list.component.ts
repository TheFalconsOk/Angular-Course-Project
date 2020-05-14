import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-r-list',
  templateUrl: './r-list.component.html',
  styleUrls: ['./r-list.component.css']
})
export class RListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'this recipe is a test of my structur', 'https://dinnerthendessert.com/wp-content/uploads/2017/02/Panda-Express-Beijing-Beef.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
