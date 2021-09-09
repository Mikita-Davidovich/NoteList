import React, { useState } from 'react';
import MyNotes from './myNotes';

const myNotesContainer = () => {
  const TEXT = 'Select note to display';
  const [notActive, setActiveStyle] = useState(0);
  const [defaultText, setActiveNote] = useState({
    title: TEXT,
    description: '',
    date: '',
  });
  const changeText = (title, description, date, id) => {
    setActiveNote({ title, description, date });
    setActiveStyle(id);
  };

  return (
    <MyNotes defaultText={defaultText} notActive={notActive} changeText={changeText} />
  );
};

export default myNotesContainer;
