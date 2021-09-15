import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditNotesPanel from '../../editNotesPanel';
import useStyles from '../../styled';

const ButtonsEditDelete = ({ editPanel, openEditPannel, onChange, title, description, setLocalStoradge, onUpdate, onCancel }) => {
  const classes = useStyles();
  console.log(title);
  return (
    <div>
      <div className={classes.iconContainer}>
        <Button className={classes.buttonsEditDelete} variant="contained" color="primary" onClick={() => openEditPannel(true)}>
          <EditIcon className={classes.icons} />
        </Button>
        <Button className={classes.buttonsEditDelete} variant="contained" color="primary">
          <DeleteIcon className={classes.icons} />
        </Button>
        {editPanel === false ? null : <EditNotesPanel
          editPanel={editPanel}
          openEditPannel={openEditPannel}
          onChange={onChange}
          title={title}
          description={description}
          setLocalStoradge={setLocalStoradge}
          onUpdate={onUpdate}
          onCancel={onCancel}
        />}
      </div>
    </div>

  );
};
ButtonsEditDelete.propTypes = {
  editPanel: PropTypes.bool.isRequired,
  openEditPannel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setLocalStoradge: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ButtonsEditDelete;
