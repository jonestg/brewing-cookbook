'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';

const NavBar = ({title}) => (
  <AppBar title={title} />
);

NavBar.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default NavBar;
