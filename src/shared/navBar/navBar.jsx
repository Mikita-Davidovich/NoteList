import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from '../../styled';
import { PATH_MY_NOTES, PATH_ABOUT, PATH_SHARED_NOTES } from '../../assets/paths';

const NavBar = ({ isNavBarOpen, openNavBar }) => {
  const styles = useStyles();
  return (
    <Drawer anchor="left" open={isNavBarOpen} onClose={() => openNavBar(false)}>
      <List>
        <ListItem onClick={() => openNavBar(false)}>
          <NavLink className={styles.navLink} to={PATH_MY_NOTES}><ListItemText primary="My Notes" /></NavLink>
        </ListItem>
        <ListItem onClick={() => openNavBar(false)}>
          <NavLink className={styles.navLink} to={PATH_SHARED_NOTES}><ListItemText primary="Shared Notes" /></NavLink>
        </ListItem>
        <ListItem onClick={() => openNavBar(false)}>
          <NavLink className={styles.navLink} to={PATH_ABOUT}><ListItemText primary="About" /></NavLink>
        </ListItem>
      </List>
    </Drawer>
  );
};
NavBar.propTypes = {
  isNavBarOpen: PropTypes.bool.isRequired,
  openNavBar: PropTypes.func.isRequired,
};

export default NavBar;
