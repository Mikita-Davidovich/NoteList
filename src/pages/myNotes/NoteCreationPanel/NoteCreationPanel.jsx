import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

import DateTimePickerForPannel from 'shared/DateTimePickerForPannel';

import { InputsContainer, ButtonsUpdateExit, Title } from './styled';

const NoteCreationPanel = ({ openClosePannel, title, description, date, onCreate, onChange }) => (
  <InputsContainer>
    <Title>Let`s start create new Note!</Title>
    <TextField id="filled-basic" label="Title" value={title} variant="filled" name="title" onChange={onChange} />
    <TextField id="filled-basic" label="Description" value={description} variant="filled" name="description" onChange={onChange} />
    <DateTimePickerForPannel date={date} onChange={onChange} />
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
  openClosePannel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NoteCreationPanel;
