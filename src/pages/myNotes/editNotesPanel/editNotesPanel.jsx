import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

import { InputsContainer, ButtonsUpdateExit } from './styled';

const EditNotesPanel = ({ title, onChange, description, onUpdate, onCancel }) => (
  <InputsContainer>
    <TextField id="filled-basic" label="Filled" variant="filled" value={title} name="title" onChange={(e) => onChange(e)} />
    <TextField id="filled-basic" label="Filled" variant="filled" value={description} name="description" onChange={(e) => onChange(e)} />
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
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default EditNotesPanel;
