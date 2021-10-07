import styled from 'styled-components';
import { Box } from '@material-ui/core';
import aboutBackGround from 'assets/images/aboutBackGround.jpg';

export const StyledBox = styled(Box)({
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  minHeight: '100vh',
  backgroundImage: `url(${aboutBackGround})`,
  backgroundSize: 'cover',
});

export const Description = styled('p')({
  color: '#fff',
});

export const Headers = styled('h2')({
  margin: 0,
  paddingTop: '20px',
  color: '#FFFF00',
});
