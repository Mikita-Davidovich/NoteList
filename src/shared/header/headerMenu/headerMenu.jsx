import React from 'react';

import { PATH_MY_NOTES, PATH_ABOUT, PATH_SHARED_NOTES } from 'assets/paths';

import { NavLinkStyled, LinksWrapper } from './styled';

const HeaderMenu = () => (
  <LinksWrapper>
    <NavLinkStyled to={PATH_MY_NOTES}>My Notes</NavLinkStyled>
    <NavLinkStyled to={PATH_SHARED_NOTES}>Shared Notes</NavLinkStyled>
    <NavLinkStyled to={PATH_ABOUT}>About</NavLinkStyled>
  </LinksWrapper>
);

export default HeaderMenu;
