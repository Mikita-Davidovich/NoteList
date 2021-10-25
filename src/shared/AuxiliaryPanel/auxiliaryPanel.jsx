import React from 'react';
import PropTypes from 'prop-types';

import { AddNotesButton, SearchField } from 'pages/MyNotes/styled';
import { NEW_NOTE } from 'assets/data';

const AuxiliaryPanel = ({ setActiveNote, createNewNote, closeNoteContent, openEditPannel, setSearchText }) => (
  <>
    <AddNotesButton
      onClick={() => {
        createNewNote(true);
        closeNoteContent(false);
        openEditPannel(false);
        setActiveNote(NEW_NOTE);
      }}
    >
      +Add note
    </AddNotesButton>
    <SearchField
      variant="standard"
      type="text"
      placeholder="Search note..."
      onChange={(e) => {
        setSearchText(e.target.value);
      }}

    />
  </>
);

AuxiliaryPanel.propTypes = {
  createNewNote: PropTypes.func.isRequired,
  closeNoteContent: PropTypes.func.isRequired,
  openEditPannel: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setActiveNote: PropTypes.func.isRequired,
};

export default AuxiliaryPanel;
