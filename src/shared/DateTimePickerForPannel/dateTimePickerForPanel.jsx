import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const DateTimePickerForPanel = ({ date, onChange }) => (
  <TextField
    variant="filled"
    type="date"
    name="date"
    value={date}
    onChange={onChange}
  />
);

DateTimePickerForPanel.propTypes = {
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default DateTimePickerForPanel;
