import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-list',
  templateUrl: './s-list.component.html',
  styleUrls: ['./s-list.component.css']
})
export class SListComponent implements OnInit {
  ingredients = [];

  constructor() { }

  ngOnInit(): void {
  }

}
