import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

import { InputsContainer, ButtonsUpdateExit, Title } from './styled';

const NoteCreationPanel = ({ newNoteOnChange, openClosePannel, title, description, date, onCreate }) => (
  <InputsContainer>
    <Title>Let`s start create new Note!</Title>
    <TextField id="filled-basic" label="Title" value={title} variant="filled" name="title" onChange={(e) => newNoteOnChange(e)} />
    <TextField id="filled-basic" label="Description" value={description} variant="filled" name="description" onChange={(e) => newNoteOnChange(e)} />
    <TextField id="filled-basic" label="Date" value={date} variant="filled" name="date" onChange={(e) => newNoteOnChange(e)} />
    <ButtonsUpdateExit>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          onCreate();
          openClosePannel();
        }}
      >
        Create
      </Button>
      <Button variant="contained" color="secondary" onClick={openClosePannel}>Exit</Button>
    </ButtonsUpdateExit>
  </InputsContainer>
);
NoteCreationPanel.propTypes = {
  newNoteOnChange: PropTypes.func.isRequired,
  openClosePannel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default NoteCreationPanel;
