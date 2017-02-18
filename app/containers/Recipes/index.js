'use strict';

import React from 'react';
import NavBar from 'components/navbar';
import RecipeList from './recipeList.js';

const recipes = [
  {name: 'New Blue Moon'},
  {name: 'FatTire'},
  {name: 'Prost Weissbier'}
];

export default class Recipes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar title="Brewing Cookbook" />
        <RecipeList recipes={recipes}/>
      </div>
    );
  }
}
