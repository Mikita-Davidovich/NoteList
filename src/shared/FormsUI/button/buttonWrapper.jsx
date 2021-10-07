import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const ButtonWrapper = ({ children }) => {
  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
  };
  return (
    <Button
      type="submit"
      {...configButton}
    >
      {children}
    </Button>
  );
};

ButtonWrapper.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonWrapper;
