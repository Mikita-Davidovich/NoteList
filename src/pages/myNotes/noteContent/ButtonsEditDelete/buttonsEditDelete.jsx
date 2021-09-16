import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditNotesPanel from '../../editNotesPanel';
import useStyles from '../../styled';

const ButtonsEditDelete = ({ editPanel, openEditPannel, onChange, title, description, onUpdate, onCancel }) => {
  const styles = useStyles();
  return (
    <div className={styles.iconContainer}>
      <Button className={styles.buttonsEditDelete} variant="contained" color="primary" onClick={() => openEditPannel(true)}>
        <EditIcon className={styles.icons} />
      </Button>
      <Button className={styles.buttonsEditDelete} variant="contained" color="primary">
        <DeleteIcon className={styles.icons} />
      </Button>
      {editPanel === false ? null : <EditNotesPanel
        editPanel={editPanel}
        onChange={onChange}
        title={title}
        description={description}
        onUpdate={onUpdate}
        onCancel={onCancel}
      />}
    </div>
  );
};
ButtonsEditDelete.propTypes = {
  editPanel: PropTypes.bool.isRequired,
  openEditPannel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ButtonsEditDelete;
