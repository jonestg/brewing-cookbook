'use strict';

import React from 'react';
import NavBar from 'components/navbar';
import RecipeList from './recipeList.js';

import recipeService from 'services/recipe.js';

export default class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
    recipeService.getRecipes().then((recipes) => {
      console.log('retrieved recipes: ', recipes);
      this.setState({
        recipes: recipes
      })
    });
  }

  render() {
    const recipes = this.state.recipes.slice();
    return (
      <div>
        <NavBar title="Brewing Cookbook" />
        <RecipeList recipes={recipes}/>
      </div>
    );
  }
}
