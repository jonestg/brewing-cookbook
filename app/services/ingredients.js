//An Ingredient service mocking server responses
'use strict';
import Fuse from 'fuse.js';

var ingredients = [
  {id: 0, name: 'hops'},
  {id: 1, name: 'barley'},
  {id: 2, name: 'wheat'},
  {id: 3, name: 'malt'},
  {id: 4, name: 'yeast'}
];

var fuse = new Fuse(ingredients, {
  keys: ["name"]
});

var externalApi = {
  getIngredients: getIngredients
}

export default externalApi;

function getIngredients(searchTerm) {
  return new Promise((resolve) => {
    if(searchTerm) {
      resolve(fuse.search(searchTerm));
    } else {
      resolve(ingredients);
    }
  });
}
