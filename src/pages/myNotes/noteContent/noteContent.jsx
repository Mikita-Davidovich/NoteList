import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import ButtonsEditDelete from './ButtonsEditDelete/buttonsEditDelete';
import useStyles from '../styled';

const NoteContent = ({ initialNote: { title, description, date }, editPanel, openEditPannel, onChange, setLocalStoradge, onUpdate, onCancel }) => {
  const classes = useStyles();
  return (
    <Box className={classes.noteText}>
      <p className={classes.title}>{title}</p>
      <p>{description}</p>
      <p className={classes.date}>{date}</p>
      {title === 'Select note to display' ? null : <ButtonsEditDelete
        editPanel={editPanel}
        openEditPannel={openEditPannel}
        title={title}
        description={description}
        onChange={onChange}
        setLocalStoradge={setLocalStoradge}
        onUpdate={onUpdate}
        onCancel={onCancel}
      />}
    </Box>
  );
};

NoteContent.propTypes = {
  initialNote: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  editPanel: PropTypes.bool.isRequired,
  openEditPannel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setLocalStoradge: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

NoteContent.defaultProps = {
  initialNote: 'Hello',
};
export default NoteContent;
