'use strict';

import React from 'react';
import NavBar from 'components/navbar';
import RecipeList from './recipeList.js';
import PaperLayout from 'components/paperLayout';
import TextField from 'material-ui/TextField';

import recipeService from 'services/recipe.js';

export default class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
    recipeService.getRecipes()
      .then((recipes) => this.setState({recipes}));
  }

  handleSearchChange(event) {
    recipeService.getRecipes(event.target.value)
      .then((recipes) => this.setState({recipes}));
  }

  render() {
    const recipes = this.state.recipes.slice();
    return (
      <div>
        <PaperLayout title="Brewing Cookbook">
          <TextField
            onChange={this.handleSearchChange.bind(this)}
            id="recipeSearch"
            hintText="Search"
          />
          <RecipeList recipes={recipes}/>
        </PaperLayout>
      </div>
    );
  }
};
