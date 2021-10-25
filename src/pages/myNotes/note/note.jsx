import React from 'react';
import PropTypes from 'prop-types';

import { cutSymbols, setDateFormat } from 'utils';

import { Title, Date, DefaultNote, ActiveNote } from './styled';

const Note = ({ activeNote: { title, description, date, id }, notActive, changeNoteContent }) => (
  <>
    {notActive === id
      ? <ActiveNote onClick={() => {
        changeNoteContent(title, description, date, id);
      }}
      >
        <Title>{title}</Title>
        { description && <p>{cutSymbols(description)}</p>}
        <Date>{setDateFormat(date)}</Date>
      </ActiveNote>
      : <DefaultNote onClick={() => {
        changeNoteContent(title, description, date, id);
      }}
      >
        <Title>{title}</Title>
        { description && <p>{cutSymbols(description)}</p>}
        <Date>{setDateFormat(date)}</Date>
      </DefaultNote>}
  </>
);

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
