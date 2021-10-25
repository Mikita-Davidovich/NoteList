import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { ButtonsContainer, StyledButton } from './styled';

const ButtonsEditDelete = ({ openEditPannel, closeNoteContent, onDelete }) => (
  <ButtonsContainer>
    <StyledButton
      variant="contained"
      color="primary"
      onClick={() => {
        openEditPannel(true);
        closeNoteContent(false);
      }}
    >
      <EditIcon />
    </StyledButton>
    <StyledButton variant="contained" color="primary" onClick={onDelete}>
      <DeleteIcon />
    </StyledButton>
  </ButtonsContainer>
);
ButtonsEditDelete.propTypes = {
  openEditPannel: PropTypes.func.isRequired,
  closeNoteContent: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ButtonsEditDelete;
