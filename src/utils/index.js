const MAX_DECS_LENGTH = 20;
export const cutSymbols = (str) => str.length > MAX_DECS_LENGTH ? `${str.substring(0, MAX_DECS_LENGTH)}...` : str;

export const setDateFormat = (date) => {
  const dateItem = date.split('-');
  const newDate = `${dateItem[2]}-${dateItem[1]}-${dateItem[0]}`;
  return newDate;
};

export const filteredNotes = (notes, searchText) => notes.filter((note) => note.title.toLowerCase().includes(searchText.toLowerCase()));
