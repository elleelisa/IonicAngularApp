import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'http://bit.ly/2Id3fmt',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'http://bit.ly/2IgGcXN',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
