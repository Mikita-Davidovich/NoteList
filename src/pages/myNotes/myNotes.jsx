import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import Layout from 'shared/Layout';

import EditNotesPanel from './EditNotesPanel';
import Note from './Note';
import NoteContent from './NoteContent';
import { NotesWrapper } from './styled';
import NoteCreationPanel from './NoteCreationPanel';
import AuxiliaryPanel from 'shared/AuxiliaryPanel/auxiliaryPanel';

const MyNotes = ({ setActiveNote, setSearchText, onDelete, onCreate, isActive, changeNoteContent, initialNote, isEditPanel, openEditPannel, notesList, onChange, onUpdate, onCancel, createNewNote, createPanel, noteContent, closeNoteContent, openClosePannel }) => (
  <Layout>
    <NotesWrapper>
      <Box>
        <AuxiliaryPanel
          setSearchText={setSearchText}
          createNewNote={createNewNote}
          closeNoteContent={closeNoteContent}
          openEditPannel={openEditPannel}
          setActiveNote={setActiveNote}
        />
        {notesList.map((note) => <Note isActive={isActive} changeNoteContent={changeNoteContent} activeNote={note} key={note.id} />)}
      </Box>
      <Box>
        {noteContent && <NoteContent
          initialNote={initialNote}
          isEditPanel={isEditPanel}
          openEditPannel={openEditPannel}
          onChange={onChange}
          onUpdate={onUpdate}
          onCancel={onCancel}
          closeNoteContent={closeNoteContent}
          onDelete={onDelete}
        />}
        {isEditPanel && <EditNotesPanel
          editPanel={isEditPanel}
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
        title={initialNote.title}
        description={initialNote.description}
        date={initialNote.date}
        onUpdate={onUpdate}
        openClosePannel={openClosePannel}
        onCreate={onCreate}
        onChange={onChange}
      />}
    </NotesWrapper>
  </Layout>
);
MyNotes.propTypes = {
  isActive: PropTypes.number.isRequired,
  changeNoteContent: PropTypes.func.isRequired,
  initialNote: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  isEditPanel: PropTypes.bool.isRequired,
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
  createNewNote: PropTypes.func.isRequired,
  createPanel: PropTypes.bool.isRequired,
  noteContent: PropTypes.bool.isRequired,
  closeNoteContent: PropTypes.func.isRequired,
  openClosePannel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setActiveNote: PropTypes.func.isRequired,
};
MyNotes.defaultProps = {
  initialNote: {},
  notesList: [],
};
export default MyNotes;
