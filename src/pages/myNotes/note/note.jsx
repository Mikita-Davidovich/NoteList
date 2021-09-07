import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import useStyles from '../styled';

const Note = ({ title, description, date, changeState, id, notActive, changeText }) => {
  const classes = useStyles();
  const cutSymbols = () => {
    let str = '';
    if (description.length > 20) {
      str = description.substring(0, 20);
      return (`${str}...`);
    }
    return description;
  };
  return (
    <Box
      className={notActive === id ? classes.activeNote : classes.note}
      onClick={() => {
        changeState(id);
        changeText(title, description, date);
      }}
    >
      <p className={classes.title}>{title}</p>
      <p>{cutSymbols()}</p>
      <p className={classes.date}>{date}</p>
    </Box>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  notActive: PropTypes.number.isRequired,
  changeText: PropTypes.func.isRequired,
};
export default Note;
