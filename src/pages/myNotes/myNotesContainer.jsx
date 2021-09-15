import React, { useState } from 'react';
import MyNotes from './myNotes';

const myNotesContainer = () => {
  const NOTE = 'Select note to display';
  const [notActive, setActiveStyle] = useState(0);
  const [defaultText, setActiveNote] = useState({
    title: NOTE,
    description: '',
    date: '',
  });
  const changeNoteContent = (title, description, date, id) => {
    setActiveNote({ title, description, date });
    setActiveStyle(id);
  };

  return (
    <MyNotes defaultText={defaultText} notActive={notActive} changeNoteContent={changeNoteContent} />
  );
};

export default myNotesContainer;
