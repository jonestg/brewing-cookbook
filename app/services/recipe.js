'use strict';

//For now the exposed functions are just mocked

var recipes = [
  {name: 'New Blue Moon'},
  {name: 'FatTire'},
  {name: 'Prost Weissbier'},
  {name: 'Prost Altbier'},
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

var externalApi = {
  getRecipes: getRecipes
}

export default externalApi;

function getRecipes() {
  return new Promise((resolve) => {
    resolve(recipes);
  });
}
