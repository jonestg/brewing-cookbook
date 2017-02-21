'use strict';

import React from 'react';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import AutoComplete from 'material-ui/AutoComplete';

//Required for AutoComplete click events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import ingredientService from 'services/ingredients';

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
      ingredient: '',
      ingredientAmount: '',
      ingredientList: [],
      ingredients
    };
    //Fetch the initial list of ingredients
    this.updateIngredientList();
  }

  addIngredient(event) {
    const ingredientItem = {
      ingredient: this.state.ingredient,
      amount: this.state.ingredientAmount
    };
    const ingredients = [...this.state.ingredients, ingredientItem];
    if(typeof this.props.onIngredientsUpdate == 'function') {
      this.props.onIngredientsUpdate(ingredients);
    }
    this.setState({
      ingredient: {},
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

  updateIngredientList(searchText) {
    ingredientService.getIngredients(searchText).then((ingredientList) => {
      this.setState({ingredientList});
    });
  }

  selectIngredient(chosenRequest, index) {
    if(index === -1) {
      //chosenRequest is the value in the field
      const ingredient = {name: chosenRequest};
      this.setState({ingredient});
    } else {
      //chosenRequest is the ingredient Id
      const ingredient = this.state.ingredientList.find((ingredient) => {
        return ingredient.id === chosenRequest;
      });
      this.setState({ingredient});
    }
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
          <AutoComplete
            id="ingredient"
            name="ingredient"
            floatingLabelText="Ingredient"
            dataSource={this.state.ingredientList}
            dataSourceConfig={{text: 'name', value: 'id'}}
            onUpdateInput={this.updateIngredientList.bind(this)}
            onNewRequest={this.selectIngredient.bind(this)}
            filter={AutoComplete.noFilter}
            openOnFocus={true}
            style={styles.nameColumn}/>
          <TextField
            id="ingredientAmount"
            name="ingredientAmount"
            floatingLabelText="Amount"
            value={this.state.ingredientAmount}
            onChange={this.handleInputChange.bind(this)}
            style={styles.amountColumn}/>
        </div>
        {ingredients.map((ingredientItem) => (
          <div style={styles.ingredientRow}>
            <div style={styles.addColumn}></div>
            <div style={styles.nameColumn}>{ingredientItem.ingredient.name}</div>
            <div style={styles.amountColumn}>{ingredientItem.amount}</div>
          </div>
        ))}
    </div>
    );
  }
};
