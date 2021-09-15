import React, { useState } from 'react';
import MyNotes from './myNotes';
import { listOfNotes } from '../../assets/data/index';

const myNotesContainer = () => {
  const TEXT = 'Select note to display';
  const [notActiveNote, setActiveStyle] = useState(0);
  const [initialNote, setActiveNote] = useState({
    title: TEXT,
    description: '',
    date: '',
    id: null,
  });
  const changeNoteContent = (title, description, date, id) => {
    setActiveNote({ title, description, date, id });
    setActiveStyle(id);
  };
  const [editPanel, setEditPanel] = useState(false);
  const openEditPannel = (flag) => {
    setEditPanel(flag);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setActiveNote((note) => ({ ...note, [name]: value }));
  };
  const possibleNotes = JSON.parse(localStorage.getItem('notes'));
  const [notesList, setNotesList] = useState(possibleNotes || listOfNotes);

  const onUpdate = () => {
    const noteToEdit = notesList.filter((note) => note.id === initialNote.id)[0];
    noteToEdit.title = initialNote.title;
    noteToEdit.description = initialNote.description;
    setNotesList(notesList);
    openEditPannel(false);
    localStorage.setItem('notes', JSON.stringify(notesList));
  };
  const onCancel = () => {
    const { title, description, date, id } = notesList.filter((note) => note.id === initialNote.id)[0];
    setActiveNote({ title, description, date, id });
    openEditPannel(false);
  };

  return (
    <MyNotes
      initialNote={initialNote}
      notActiveNote={notActiveNote}
      changeNoteContent={changeNoteContent}
      openEditPannel={openEditPannel}
      editPanel={editPanel}
      notesList={notesList}
      onChange={onChange}
      onUpdate={onUpdate}
      onCancel={onCancel}
    />
  );
};

export default myNotesContainer;
