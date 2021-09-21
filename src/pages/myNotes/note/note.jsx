import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { cutSymbols } from '../../../utils';
import useStyles from '../styled';

const Note = ({ activeNote: { title, description, date, id }, notActive, changeNoteContent }) => {
  const styles = useStyles();
  return (
    <Box
      className={notActive === id ? styles.activeNote : styles.note}
      onClick={() => {
        changeNoteContent(title, description, date, id);
      }}
    >
      <p className={styles.title}>{title}</p>
      { description && <p>{cutSymbols(description)}</p>}
      <p className={styles.date}>{date}</p>
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
  changeNoteContent: PropTypes.func.isRequired,
};
Note.defaultProps = {
  activeNote: 'Hello',
};
export default Note;
