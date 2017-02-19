'use strict';

import React from 'react';
import NavBar from 'components/navbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '50px',
    width: '80%',
    maxWidth: '500px'
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
      <div>
        <NavBar title="Create A Recipe"/>
        <div style={styles.formContainer}>
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
          <RaisedButton
            label="Submit"
            primary={true}
            style={{
              width: '200px',
              marginTop: '10px'
            }}
            onClick={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    );
  }
}
