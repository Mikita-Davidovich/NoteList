import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const DateTimePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return (
    <TextField {...configDateTimePicker} />
  );
};
DateTimePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
export default DateTimePicker;
