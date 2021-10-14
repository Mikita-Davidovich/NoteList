import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Title = styled('p')({
  fontWeight: 'bold',
  wordWrap: 'break-word',
  width: '300px',
  margin: '0',
});

export const Date = styled('div')({
  fontSize: '10px',
});

export const DefaultNote = styled(Box)({
  border: '1px solid black',
  margin: '0 20px 20px 10px',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  padding: '20px',
  transition: '1s',
  color: '#000',
  borderRadius: '20px',
  backgroundColor: '#b3ece9',
});

export const ActiveNote = styled(Box)({
  border: '1px solid #00258a',
  margin: '0 20px 20px 10px',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  color: '#fff',
  padding: '20px',
  transition: '1s',
  boxShadow: '0px 4px 6px rgb(26 46 53 / 40%)',
  borderRadius: '20px',
  backgroundColor: '#000',
});
