import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Note from './note';
import NoteContent from './noteContent';
import useStyles from './styled';


const MyNotes = ({ notActiveNote, changeNoteContent, initialNote, editPanel, openEditPannel, notesList, onChange, onUpdate, onCancel }) => {
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
  notesList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,

};
MyNotes.defaultProps = {
  initialNote: 'Hello',
  notesList: 'Hi',
};
export default MyNotes;
