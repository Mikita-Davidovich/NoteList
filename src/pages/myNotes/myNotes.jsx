import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { NOTES_LIST } from '../../assets/data/index';
import Note from './note';
import NoteContent from './noteContent';
import useStyles from './styled';

const MyNotes = ({ notActive, changeText, defaultText }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box>
        {NOTES_LIST.map((note) => <Note notActive={notActive} changeText={changeText} activeNote={note} key={note.key} />)}
      </Box>
      <NoteContent text={defaultText} />
    </Box>
  );
};
MyNotes.propTypes = {
  notActive: PropTypes.number.isRequired,
  changeText: PropTypes.func.isRequired,
  defaultText: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};
MyNotes.defaultProps = {
  defaultText: 'Hello',
};
export default MyNotes;
