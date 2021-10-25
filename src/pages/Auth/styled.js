import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const Title = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '50px',
  fontFamily: 'Akronim, cursive',
  paddingTop: '35px',
});

export const StyledContainer = styled(Container)({
  width: '350px !important',
  margin: '0 auto !important',
});

export const Wrapper = styled(Grid)({
  backgroundColor: '#3AAFA9',
  height: '100vh',
});

export const LinkWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
});

export const LinkWrapperLogin = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
  marginLeft: '15px',
});

export const NavLinkLogin = styled(NavLink)({
  textDecoration: 'none',
  marginLeft: '10px',
  color: '#fff',
  fontSize: '17px',
  fontFamily: 'Gemunu Libre',
  '&:hover': {
    color: '#a600e1',
  },
});
