import styled from 'styled-components';
import { Box, Button, TextField } from '@material-ui/core';

export const NotesWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  paddingTop: '20px',
});

export const Wrapper = styled('div')({
  backgroundColor: '#3AAFA9',
  minHeight: '100vh',
});

export const AddNotesButton = styled(Button)({
  margin: '0 0 10px 15px !important',
  borderRadius: '10px !important',
});

export const SearchField = styled(TextField)({
  margin: '0 0 0 10px !important',
  width: '130px',
});
