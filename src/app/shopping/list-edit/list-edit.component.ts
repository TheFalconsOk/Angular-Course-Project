import { Output, ElementRef, EventEmitter, ViewChild, Component, OnInit } from '@angular/core';
import {Ingredient} from '../../sharedAssets/ingredient.model'

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
  @ViewChild('inputName') nameInputRef: ElementRef;
  @ViewChild('inputAmmount') ammountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();



  constructor() { }

  ngOnInit(): void {
  }

  
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmmount = this.ammountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmmount);
    this.ingredientAdded.emit(newIngredient);

  }

}
