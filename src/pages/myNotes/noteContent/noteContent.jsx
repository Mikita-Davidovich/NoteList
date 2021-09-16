import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import ButtonsEditDelete from './ButtonsEditDelete/buttonsEditDelete';
import useStyles from '../styled';

const NoteContent = ({ initialNote: { title, description, date }, editPanel, openEditPannel, onChange, onUpdate, onCancel }) => {
  const styles = useStyles();
  return (
    <Box className={styles.noteText}>
      <p className={styles.title}>{title}</p>
      <p>{description}</p>
      <p className={styles.date}>{date}</p>
      {title === 'Select note to display' ? null : <ButtonsEditDelete
        editPanel={editPanel}
        openEditPannel={openEditPannel}
        title={title}
        description={description}
        onChange={onChange}
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
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

NoteContent.defaultProps = {
  initialNote: 'Hello',
};
export default NoteContent;
