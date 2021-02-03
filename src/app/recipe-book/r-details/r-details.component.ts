import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-r-details',
  templateUrl: './r-details.component.html',
  styleUrls: ['./r-details.component.css']
})
export class RDetailsComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor() { }

  ngOnInit(): void {
  }

}
