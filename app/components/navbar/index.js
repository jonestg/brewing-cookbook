'use strict';

import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleMenuClick(event) {
    this.setState({
      open: !this.state.open,
      anchorEl: event.currentTarget
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.handleMenuClick.bind(this)}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
        >
          <Menu>
            <MenuItem
              primaryText="Search Recipes"
              containerElement={<Link to="/" />}
            />
            <MenuItem
              primaryText="Create a Recipe"
              containerElement={<Link to="/create" />}
            />
          </Menu>
        </Popover>
      </div>
    );
  }
}
