import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Recipes from 'containers/Recipes';

ReactDOM.render((
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Recipes}>
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
