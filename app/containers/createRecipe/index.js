'use strict';

import React from 'react';
import PaperLayout from 'components/paperLayout';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IngredientForm from './ingredientForm';

import recipeService from 'services/recipe';

export default class CreateRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      recipeName: '',
      description: '',
      ingredients: []
    }
  }

  handleSubmit() {
    const recipe = {
      name: this.state.recipeName,
      description: this.state.description,
      ingredients: this.state.ingredients
    };
    recipeService.addRecipe(recipe)
      .then(() => console.log('success'))
      .catch((error) => {
        console.error('There was a problem saving the recipe: ', error)
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  updateIngredients(ingredients) {
    this.setState({ingredients});
  }

  render() {
    return (
      <div>
        <PaperLayout title="Create a Recipe">
          <TextField
            id="nameField"
            name="recipeName"
            value={this.state.recipeName}
            fullWidth={true}
            style={{maxWidth: '200px'}}
            onChange={this.handleInputChange.bind(this)}
            floatingLabelText="Name"/>
          <TextField
            id="descriptionField"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange.bind(this)}
            floatingLabelText="Description"
            style={{maxWidth: '400px'}}
            fullWidth={true}
            multiLine={true}/>
          <IngredientForm onIngredientsUpdate={this.updateIngredients.bind(this)}/>
          <div style={{
            display: 'flex',
            justifyContent:'center'}}>
            <RaisedButton
              label="Submit"
              primary={true}
              style={{
                width: '300px',
                marginTop: '10px'
              }}
              onClick={this.handleSubmit.bind(this)}
            />
          </div>
        </PaperLayout>
      </div>
    );
  }
}
