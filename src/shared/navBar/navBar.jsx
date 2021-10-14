import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

import { PATH_MY_NOTES, PATH_ABOUT, PATH_SHARED_NOTES } from 'assets/paths';

import { NavLinkStyled } from './styled';

const NavBar = ({ isNavBarOpen, openNavBar }) => (
  <Drawer anchor="left" open={isNavBarOpen} onClose={() => openNavBar(false)}>
    <List>
      <ListItem onClick={() => openNavBar(false)}>
        <NavLinkStyled to={PATH_MY_NOTES}><ListItemText primary="My Notes" /></NavLinkStyled>
      </ListItem>
      <ListItem onClick={() => openNavBar(false)}>
        <NavLinkStyled to={PATH_SHARED_NOTES}><ListItemText primary="Shared Notes" /></NavLinkStyled>
      </ListItem>
      <ListItem onClick={() => openNavBar(false)}>
        <NavLinkStyled to={PATH_ABOUT}><ListItemText primary="About" /></NavLinkStyled>
      </ListItem>
    </List>
  </Drawer>
);
NavBar.propTypes = {
  isNavBarOpen: PropTypes.bool.isRequired,
  openNavBar: PropTypes.func.isRequired,
};

export default NavBar;
