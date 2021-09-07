import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import { NOTES_LIST } from '../../assets/data/index';
import Note from './note';
import NoteText from './noteText';
import useStyles from './styled';

const MyNotes = () => {
  const text = 'Select note to display';
  const [defaultText, activeText] = useState({
    title: text,
    description: '',
    date: '',
  });
  const changeText = (title, description, date) => {
    activeText({ title, description, date });
  };
  const classes = useStyles();
  const [notActive, active] = useState(0);
  const changeState = (id) => {
    active(id);
  };
  return (
    <Box className={classes.container}>
      <Box>
        {NOTES_LIST.map((note) => <Note notActive={notActive} changeText={changeText} changeState={changeState} title={note.title} description={note.description} date={note.date} key={note.key} id={note.id} />)}
      </Box>
      <NoteText text={defaultText} />
    </Box>
  );
};
export default MyNotes;
