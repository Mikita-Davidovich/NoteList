import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import HeaderMenu from './headerMenu';
import { BurgerMenuButton } from './styled';

const Header = ({ openNavBar }) => (
  <AppBar>
    <Container fixed>
      <Toolbar>
        <BurgerMenuButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => openNavBar(true)}
        >
          <MenuIcon />
        </BurgerMenuButton>
      </Toolbar>
      <HeaderMenu />
    </Container>
  </AppBar>
);
Header.propTypes = {
  openNavBar: PropTypes.func.isRequired,
};

export default Header;
