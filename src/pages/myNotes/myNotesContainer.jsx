import React, { useState } from 'react';
import MyNotes from './myNotes';

const myNotesContainer = () => {
  const TEXT = 'Select note to display';
  const [notActive, setActiveStyle] = useState(0);
  const [initialNote, setActiveNote] = useState({
    title: TEXT,
    description: '',
    date: '',
  });
  const changeNoteContent = (title, description, date, id) => {
    setActiveNote({ title, description, date });
    setActiveStyle(id);
  };

  return (
    <MyNotes initialNote={initialNote} notActive={notActive} changeNoteContent={changeNoteContent} />
  );
};

export default myNotesContainer;
