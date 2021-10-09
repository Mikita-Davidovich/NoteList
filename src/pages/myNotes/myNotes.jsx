import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import Layout from 'shared/Layout/layout';

import EditNotesPanel from './EditNotesPanel';
import Note from './Note';
import NoteContent from './NoteContent';
import { NotesWrapper } from './styled';

const MyNotes = ({ notActiveNote, changeNoteContent, initialNote, editPanel, openEditPannel, notesList, onChange, onUpdate, onCancel }) => (
  <Layout>
    <NotesWrapper>
      <Box>
        {notesList.map((note) => <Note notActive={notActiveNote} changeNoteContent={changeNoteContent} activeNote={note} key={note.id} />)}
      </Box>
      <Box>
        <NoteContent
          initialNote={initialNote}
          editPanel={editPanel}
          openEditPannel={openEditPannel}
          onChange={onChange}
          onUpdate={onUpdate}
          onCancel={onCancel}
        />
        {editPanel && <EditNotesPanel
          editPanel={editPanel}
          onChange={onChange}
          title={initialNote.title}
          description={initialNote.description}
          onUpdate={onUpdate}
          onCancel={onCancel}
        />}
      </Box>
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
