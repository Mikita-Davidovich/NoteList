import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinksWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 780px)': {
    display: 'none',
  },
});

export const NavLinkStyled = styled(NavLink)({
  marginLeft: '10px',
  textDecoration: 'none',
  color: '#b4fdff',
  border: '1px solid',
  padding: '5px',
  borderRadius: '15px',
  boxShadow: '0px 0px 25px #b4fdff',
  '&:hover': {
    color: '#3AAFA9',
  },
});
