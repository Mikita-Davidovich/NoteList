import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Note from './note';
import NoteContent from './noteContent';
import useStyles from './styled';

const MyNotes = ({ notActiveNote, changeNoteContent, initialNote, editPanel, openEditPannel, notesList, onChange, setLocalStoradge, onUpdate, onCancel }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box>
        {notesList.map((note) => <Note notActive={notActiveNote} changeNoteContent={changeNoteContent} activeNote={note} key={note.id} />)}
      </Box>
      <NoteContent
        initialNote={initialNote}
        editPanel={editPanel}
        openEditPannel={openEditPannel}
        onChange={onChange}
        setLocalStoradge={setLocalStoradge}
        onUpdate={onUpdate}
        onCancel={onCancel}
      />
    </Box>
  );
};
MyNotes.propTypes = {
  notActiveNote: PropTypes.number.isRequired,
  changeNoteContent: PropTypes.func.isRequired,
  initialNote: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  editPanel: PropTypes.bool.isRequired,
  openEditPannel: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  notesList: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  setLocalStoradge: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,

};
MyNotes.defaultProps = {
  initialNote: 'Hello',
};
export default MyNotes;
