import styled from 'styled-components';

export const Title = styled('p')({
  fontWeight: 'bold',
  wordWrap: 'break-word',
  width: '300px',
  margin: '0',
});

export const Description = styled('p')({
  wordWrap: 'break-word',
  width: '300px',
});

export const Date = styled('p')({
  fontSize: '10px',
});

export const Wrapper = styled('div')({
  marginRight: '30px',
});

export const EditPanel = styled('div')({
  border: '1px solid black',
  padding: '25px',
  borderRadius: '20px',
  display: 'flex',
});
