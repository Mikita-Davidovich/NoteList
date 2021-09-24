import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Container, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../../styled';

const Header = ({ openNavBar }) => {
  const styles = useStyles();
  return (
    <AppBar className={styles.header}>
      <Container fixed>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => openNavBar(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
Header.propTypes = {
  openNavBar: PropTypes.func.isRequired,
};

export default Header;
