import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import useStyles from '../../../styled';

const EditNotesPanel = ({ title, onChange, description, onUpdate, onCancel }) => {
  const styles = useStyles();
  return (
    <div className={styles.inputsContainer}>
      <TextField styles={{ inputTitle: styles.inputTitle }} className={styles.inputTitle} id="filled-basic" label="Filled" variant="filled" value={title} name="title" onChange={(e) => onChange(e)} />
      <TextField id="filled-basic" label="Filled" variant="filled" value={description} name="description" onChange={(e) => onChange(e)} />
      <div className={styles.buttonsUpdateExit}>
        <Button className={styles.buttonsUpdateExit} variant="contained" color="secondary" onClick={() => onUpdate()}>Update</Button>
        <Button className={styles.buttonsUpdateExit} variant="contained" color="secondary" onClick={onCancel}>Exit</Button>
      </div>
    </div>
  );
};
EditNotesPanel.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default EditNotesPanel;
