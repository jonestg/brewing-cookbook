import React from 'react';
import AppBar from 'material-ui/AppBar';

console.log('NavBar running');
const NavBar = ({title}) => (
  <AppBar title={title} />
);

NavBar.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default NavBar;
