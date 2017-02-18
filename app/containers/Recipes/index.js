'use strict';

import React from 'react';
import NavBar from 'components/navbar';

export default class Recipes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar title="Brewing Cookbook" />
        <h1>List Recipes</h1>
      </div>
  );
  }
}
