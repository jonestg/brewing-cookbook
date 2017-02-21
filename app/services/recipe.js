//A Recipe service mocking server responses
'use strict';
import Fuse from 'fuse.js';

var recipes = [
  {name: 'Blue Moon'},
  {name: 'FatTire'},
  {name: 'Weissbier'},
  {name: 'Altbier'},
  {name: 'Corona'},
  {name: 'Guiness'},
  {name: 'Amber'},
  {
    id: '1',
    name: `Bru'n Dry Stout`,
    description: 'A recipe to help fill out the ui',
    ingredients: [
      {ingredient: {name: 'Two-Row Pale Malt'}, amount: '6.5 lbs'},
      {ingredient: {name: 'Roast Barley'}, amount: '1.3 lbs'},
      {ingredient: {name: 'Flaked Barley'}, amount: '14 oz'},
      {ingredient: {name: 'East Kent Goldings hops'}, amount: '1.5 oz'},
      {ingredient: {name: 'Irish Ale Yeast'}, amount: ''}
    ]
  }
];

var fuse = new Fuse(recipes, {
  keys: ["name"]
});

var externalApi = {
  getRecipes: getRecipes,
  addRecipe: addRecipe
}

export default externalApi;

function getRecipes(searchTerms) {
  return new Promise((resolve) => {
    if(searchTerms){
      resolve(fuse.search(searchTerms));
    } else {
      resolve(recipes);
    }
  });
}

function addRecipe(recipe) {
  return new Promise((resolve) => {
    console.log('recipe submitted: ', recipe);
    resolve();
  });
}
