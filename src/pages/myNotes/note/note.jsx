import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { cutSymbols } from '../../../utils';
import useStyles from '../styled';

const Note = ({ activeNote: { title, description, date, id }, notActive, changeText }) => {
  const classes = useStyles();
  return (
    <Box
      className={notActive === id ? classes.activeNote : classes.note}
      onClick={() => {
        changeText(title, description, date, id);
      }}
    >
      <p className={classes.title}>{title}</p>
      { description !== '' && <p>{cutSymbols(description)}</p>}
      <p className={classes.date}>{date}</p>
    </Box>
  );
};

Note.propTypes = {
  activeNote: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  notActive: PropTypes.number.isRequired,
  changeText: PropTypes.func.isRequired,
};
Note.defaultProps = {
  activeNote: 'Hello',
};
export default Note;
