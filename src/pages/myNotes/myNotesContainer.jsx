import React, { useEffect, useState } from 'react';

import { INITIAL_NOTE } from 'assets/data';
import { updateNote, createNote, deleteNote, getAllNotes, useGetNotes } from 'api/notesHooks';
import { filteredNotes } from 'utils';

import { Wrapper } from './styled';
import MyNotes from './myNotes';

const myNotesContainer = () => {
  const [notActiveNote, setActiveStyle] = useState(0);
  const [initialNote, setActiveNote] = useState(INITIAL_NOTE);
  const [searchText, setSearchText] = useState('');

  const changeNoteContent = (title, description, date, id) => {
    setActiveNote({ title, description, date, id });
    setActiveStyle(id);
  };

  const [editPanel, setEditPanel] = useState(false);
  const openEditPannel = (flag) => {
    setEditPanel(flag);
  };

  const [noteContent, setNoteContent] = useState(true);
  const closeNoteContent = (flag) => {
    setNoteContent(flag);
  };

  const [createPanel, setCreatePanel] = useState(false);
  const createNewNote = (flag) => {
    setCreatePanel(flag);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setActiveNote((note) => ({ ...note, [name]: value }));
  };

  const { data: noteList, isLoading } = useGetNotes();
  const [notesList, setNotesList] = useState(noteList);

  const onUpdate = () => {
    const noteToEdit = notesList.filter((note) => note.id === initialNote.id)[0];
    noteToEdit.title = initialNote.title;
    noteToEdit.description = initialNote.description;
    noteToEdit.date = initialNote.date;
    setNotesList(notesList);
    openEditPannel(false);
    closeNoteContent(true);
    const modifiedNote = {
      title: noteToEdit.title,
      description: noteToEdit.description,
      date: noteToEdit.date,
    };
    updateNote(noteToEdit, modifiedNote);
  };

  const onCreate = () => {
    createNote(initialNote);
    setActiveStyle(0);
    setActiveNote(initialNote);
    setNotesList(notesList);
  };

  const onDelete = () => {
    const noteToEdit = notesList.filter((note) => note.id === initialNote.id)[0];
    deleteNote(noteToEdit);
    setActiveNote(INITIAL_NOTE);
  };

  const onCancel = () => {
    const { title, description, date, id } = notesList.filter((note) => note.id === initialNote.id)[0];
    setActiveNote({ title, description, date, id });
    openEditPannel(false);
    closeNoteContent(true);
  };

  const openClosePannel = () => {
    closeNoteContent(true);
    createNewNote(false);
  };

  useEffect(() => {
    setNotesList(noteList);
  }, [noteList]);

  useEffect(() => {
    filteredNotes(noteList || [], searchText);
  }, [noteList]);

  return (
    <Wrapper>
      <MyNotes
        initialNote={initialNote}
        notActiveNote={notActiveNote}
        changeNoteContent={changeNoteContent}
        openEditPannel={openEditPannel}
        editPanel={editPanel}
        notesList={notesList}
        onChange={onChange}
        onUpdate={onUpdate}
        onCancel={onCancel}
        createNewNote={createNewNote}
        createPanel={createPanel}
        noteContent={noteContent}
        closeNoteContent={closeNoteContent}
        openClosePannel={openClosePannel}
        onCreate={onCreate}
        onDelete={onDelete}
        setSearchText={setSearchText}
        searchText={searchText}
        setActiveNote={setActiveNote}
      />
    </Wrapper>
  );
};

export default myNotesContainer;
