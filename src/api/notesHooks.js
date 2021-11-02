import axios from 'axios';
import { useQuery } from 'react-query';

const api = axios.create({
  baseURL: 'http://localhost:3008/',
});

export const useGetNotes = () => useQuery(
  ['notes'],
  async () => {
    const response = await api.get('notes');
    return response.data;
  },
);

export const updateNote = async (noteToEdit, modifiedNote) => {
  const response = await api.put(`notes/${noteToEdit.id}`, modifiedNote);
  return response.data;
};

export const createNote = async (newNote) => {
  const request = {
    title: newNote.title,
    description: newNote.description,
    date: newNote.date,
  };
  const response = await api.post('notes', request);
  return response.data;
};

export const deleteNote = async (noteToEdit) => {
  api.delete(`notes/${noteToEdit.id}`);
};
