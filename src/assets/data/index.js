import moment from 'moment';

const TEXT = 'Select note to display';
export const INITIAL_NOTE = {
  title: TEXT,
  description: '',
  date: moment().format('YYYY-MM-DD'),
  id: '',
};

export const NEW_NOTE = {
  title: '',
  description: '',
  date: '',
};
