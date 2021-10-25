import React from 'react';
import PropTypes from 'prop-types';

import { setDateFormat } from 'utils';

import ButtonsEditDelete from './ButtonsEditDelete';
import { Title, Description, Date, Wrapper, EditPanel } from './styled';

const NoteContent = ({ initialNote: { title, description, date }, editPanel, openEditPannel, onChange, onUpdate, onCancel, closeNoteContent, onDelete }) => (
  <EditPanel>
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Date>{setDateFormat(date)}</Date>
    </Wrapper>
    {title === 'Select note to display' ? null : <ButtonsEditDelete
      editPanel={editPanel}
      openEditPannel={openEditPannel}
      title={title}
      description={description}
      onChange={onChange}
      onUpdate={onUpdate}
      onCancel={onCancel}
      closeNoteContent={closeNoteContent}
      onDelete={onDelete}
    />}
  </EditPanel>
);

NoteContent.propTypes = {
  initialNote: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  editPanel: PropTypes.bool.isRequired,
  openEditPannel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  closeNoteContent: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

NoteContent.defaultProps = {
  initialNote: 'Hello',
};
export default NoteContent;
