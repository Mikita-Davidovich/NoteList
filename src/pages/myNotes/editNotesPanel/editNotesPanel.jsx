import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

import { InputsContainer, ButtonsUpdateExit, Title } from './styled';
import DateTimePickerForPannel from 'shared/DateTimePickerForPannel';

const EditNotesPanel = ({ title, onChange, description, onUpdate, onCancel, date }) => (
  <InputsContainer>
    <Title>Please edit your notes and click button UPDATE</Title>
    <TextField id="filled-basic" label="Title" variant="filled" value={title} name="title" onChange={(e) => onChange(e)} />
    <TextField id="filled-basic" label="Description" variant="filled" value={description} name="description" onChange={(e) => onChange(e)} />
    <DateTimePickerForPannel date={date} onChange={onChange} />
    <ButtonsUpdateExit>
      <Button variant="contained" color="secondary" onClick={() => onUpdate()}>Update</Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>Exit</Button>
    </ButtonsUpdateExit>
  </InputsContainer>
);
EditNotesPanel.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default EditNotesPanel;
