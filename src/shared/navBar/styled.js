import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)({
  textDecoration: 'none',
  color: '#000',
  '&:hover': {
    color: '#fff',
  },
});
