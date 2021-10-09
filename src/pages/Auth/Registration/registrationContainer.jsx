import React from 'react';

import Registration from './registration';

const RegistrationContainer = () => {
  const INITIAL_REGISTRATION_VALUE = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    setTimeout(() => {
      onSubmitProps.resetForm();
    }, 2000);
  };
  return (
    <Registration initialValues={INITIAL_REGISTRATION_VALUE} onSubmit={onSubmit} />
  );
};

export default RegistrationContainer;
