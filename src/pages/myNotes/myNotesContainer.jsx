import React, { useEffect, useState } from 'react';

import { listOfNotes } from 'assets/data';

import { Wrapper } from './styled';
import MyNotes from './myNotes';
import { useQuery } from 'react-query';
import axios from 'axios';

const myNotesContainer = () => {
  const getNotes = async () => {
    const response = await axios.get('http://localhost:3008/notes');
    return response.data;
  };
  const { data: noteList, status } = useQuery('notes', getNotes);
  const TEXT = 'Select note to display';
  const [notActiveNote, setActiveStyle] = useState(0);
  const [initialNote, setActiveNote] = useState({
    title: TEXT,
    description: '',
    date: '',
    id: null,
  });

  const [newNote, setNewNote] = useState({
    title: '',
    description: '',
    date: '',
  });

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
  const newNoteOnChange = (e) => {
    const { name, value } = e.target;
    setNewNote((note) => ({ ...note, [name]: value }));
  };

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
    axios.put(`http://localhost:3008/notes/${noteToEdit.id}`, modifiedNote);
  };

  const onCreate = () => {
    const note = {
      title: newNote.title,
      description: newNote.description,
      date: newNote.date,
    };
    axios.post('http://localhost:3008/notes/', note);
  };

  const deleteNote = () => {
    const noteToEdit = notesList.filter((note) => note.id === initialNote.id)[0];
    axios.delete(`http://localhost:3008/notes/${noteToEdit.id}`);
    setActiveNote({
      title: TEXT,
      description: '',
      date: '',
      id: null,
    });
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
  useEffect(() => setNotesList(noteList));
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
        newNote={newNote}
        newNoteOnChange={newNoteOnChange}
        onCreate={onCreate}
        deleteNote={deleteNote}
      />
    </Wrapper>
  );
};

export default myNotesContainer;
