import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Redirect, Route, Link, hashHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Recipes from 'containers/Recipes';
import CreateRecipe from 'containers/createRecipe';

ReactDOM.render((
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={Recipes} />
      <Route path="/create" component={CreateRecipe} />
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
