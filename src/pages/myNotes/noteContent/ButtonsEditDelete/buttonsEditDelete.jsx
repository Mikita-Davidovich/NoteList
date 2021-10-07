import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { ButtonsContainer, StyledButton } from './styled';

const ButtonsEditDelete = ({ openEditPannel }) => (
  <ButtonsContainer>
    <StyledButton variant="contained" color="primary" onClick={() => openEditPannel(true)}>
      <EditIcon />
    </StyledButton>
    <StyledButton variant="contained" color="primary">
      <DeleteIcon />
    </StyledButton>
  </ButtonsContainer>
);
ButtonsEditDelete.propTypes = {
  openEditPannel: PropTypes.func.isRequired,
};

export default ButtonsEditDelete;
