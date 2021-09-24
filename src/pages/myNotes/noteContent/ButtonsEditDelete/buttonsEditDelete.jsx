import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from '../../../../styled';

const ButtonsEditDelete = ({ openEditPannel }) => {
  const styles = useStyles();
  return (
    <div className={styles.iconContainer}>
      <Button className={styles.buttonsEditDelete} variant="contained" color="primary" onClick={() => openEditPannel(true)}>
        <EditIcon className={styles.icons} />
      </Button>
      <Button className={styles.buttonsEditDelete} variant="contained" color="primary">
        <DeleteIcon className={styles.icons} />
      </Button>
    </div>
  );
};
ButtonsEditDelete.propTypes = {
  openEditPannel: PropTypes.func.isRequired,
};

export default ButtonsEditDelete;
