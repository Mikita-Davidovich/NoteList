import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import Layout from 'shared/Layout/layout';

import EditNotesPanel from './EditNotesPanel';
import Note from './Note';
import NoteContent from './NoteContent';
import { NotesWrapper, AddNotesButton } from './styled';
import NoteCreationPanel from './NoteCreationPanel';

const MyNotes = ({ deleteNote, onCreate, newNoteOnChange, newNote, notActiveNote, changeNoteContent, initialNote, editPanel, openEditPannel, notesList, onChange, onUpdate, onCancel, createNewNote, createPanel, noteContent, closeNoteContent, openClosePannel }) => (
  <Layout>
    <NotesWrapper>
      <Box>
        {notesList.map((note) => <Note notActive={notActiveNote} changeNoteContent={changeNoteContent} activeNote={note} key={note.id} />)}
      </Box>
      <Box>
        {noteContent && <NoteContent
          initialNote={initialNote}
          editPanel={editPanel}
          openEditPannel={openEditPannel}
          onChange={onChange}
          onUpdate={onUpdate}
          onCancel={onCancel}
          closeNoteContent={closeNoteContent}
          deleteNote={deleteNote}
        />}
        {editPanel && <EditNotesPanel
          editPanel={editPanel}
          onChange={onChange}
          date={initialNote.date}
          title={initialNote.title}
          description={initialNote.description}
          onUpdate={onUpdate}
          onCancel={onCancel}
          closeNoteContent={closeNoteContent}
        />}
      </Box>
      {createPanel && <NoteCreationPanel
        title={newNote.title}
        description={newNote.description}
        date={newNote.date}
        newNoteOnChange={newNoteOnChange}
        onUpdate={onUpdate}
        openClosePannel={openClosePannel}
        onCreate={onCreate}
      />}
      <AddNotesButton
        onClick={() => {
          createNewNote(true);
          closeNoteContent(false);
          openEditPannel(false);
        }}
      >
        +Add note
      </AddNotesButton>
    </NotesWrapper>
  </Layout>
);
MyNotes.propTypes = {
  notActiveNote: PropTypes.number.isRequired,
  changeNoteContent: PropTypes.func.isRequired,
  initialNote: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  newNote: PropTypes.shape({
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
  newNoteOnChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  createNewNote: PropTypes.func.isRequired,
  createPanel: PropTypes.bool.isRequired,
  noteContent: PropTypes.bool.isRequired,
  closeNoteContent: PropTypes.func.isRequired,
  openClosePannel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
MyNotes.defaultProps = {
  initialNote: {},
  notesList: [],
  newNote: {},
};
export default MyNotes;
