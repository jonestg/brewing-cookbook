'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';

const styles = {
  ingredientContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  ingredientRow: {
    display: 'flex',
    width: '100%',
    flexWrap: 'no-wrap',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  addColumn: {
    width: '50px'
  },
  nameColumn: {
    width: '200px',
    marginRight: '10px'
  },
  amountColumn: {
    width: '70px'
  }
}

export default class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    if(Array.isArray(this.props.ingredients)) {
      var ingredients = this.props.ingredients.slice();
    } else {
      var ingredients = [];
    }
    this.state = {
      ingredientName: '',
      ingredientAmount: '',
      ingredients
    };
  }

  addIngredient(event) {
    const ingredient = {
      name: this.state.ingredientName,
      amount: this.state.ingredientAmount
    };
    const ingredients = [...this.state.ingredients, ingredient];
    if(typeof this.props.onIngredientsUpdate == 'function') {
      this.props.onIngredientsUpdate(ingredients);
    }
    this.setState({
      ingredientName: '',
      ingredientAmount: '',
      ingredients
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
    const ingredients = this.state.ingredients.slice();
    return (
      <div style={styles.ingredientContainer}>
        <div style={styles.ingredientRow}>
          <IconButton
            style={styles.addColumn}
            onClick={this.addIngredient.bind(this)}>
            <AddIcon/>
          </IconButton>
          <TextField
            id="ingredientName"
            name="ingredientName"
            floatingLabelText="Ingredient"
            value={this.state.ingredientName}
            onChange={this.handleInputChange.bind(this)}
            style={styles.nameColumn}/>
          <TextField
            id="ingredientAmount"
            name="ingredientAmount"
            floatingLabelText="Amount"
            value={this.state.ingredientAmount}
            onChange={this.handleInputChange.bind(this)}
            style={styles.amountColumn}/>
        </div>
        {ingredients.map((ingredient) => (
          <div style={styles.ingredientRow}>
            <div style={styles.addColumn}></div>
            <div style={styles.nameColumn}>{ingredient.name}</div>
            <div style={styles.amountColumn}>{ingredient.amount}</div>
          </div>
        ))}
    </div>
    );
  }
};
