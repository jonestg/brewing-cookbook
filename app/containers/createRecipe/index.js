'use strict';

import React from 'react';
import NavBar from 'components/navbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import IngredientForm from './ingredientForm';

import recipeService from 'services/recipe';

const styles = {
  formWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    maxWidth: '800px',
    padding: '25px',
    borderRadius: '10px',
    marginTop: '20px'
  }
}

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
      description: this.state.description
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

  render() {
    return (
      <div style={styles.root}>
        <NavBar title="Create a Recipe"/>
        <div style={styles.formWrapper}>
          <Paper style={styles.formContainer} zDepth={1}>
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
            <IngredientForm />
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
                onClick={this.handleSubmit.bind(this)}/>
              </div>
          </Paper>
        </div>
      </div>
    );
  }
}
