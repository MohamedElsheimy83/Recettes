import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-details-recipes',
  templateUrl: './details-recipes.component.html',
  styleUrls: ['./details-recipes.component.css'],
})
export class DetailsRecipesComponent implements OnInit {
  @Input() recipe?: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
