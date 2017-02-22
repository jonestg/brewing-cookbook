'use strict';

import React from 'react';

const styles = {
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  recipeCard: {
    width: '150px',
    height: '150px',
    background: 'Gray',
    color: 'white',
    margin: '5px',
    padding: '10px',
    textAlign: 'center'
  }
};

const RecipeCard = ({recipe}) => (
  <div style={styles.recipeCard}>
    {recipe.name}
  </div>
);

const RecipeList = ({recipes}) => (
  <div style={styles.listContainer}>
    {recipes.map((recipe) => (
      <RecipeCard recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;
