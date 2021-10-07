import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from 'shared/header/header';
import NavBar from 'shared/navBar/navBar';

const Layout = ({ children }) => {
  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const openNavBar = (bool) => {
    setNavBarOpen(bool);
  };
  return (
    <>
      <Header openNavBar={openNavBar} />
      {children}
      <NavBar isNavBarOpen={isNavBarOpen} openNavBar={openNavBar} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
