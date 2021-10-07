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
  const onSubmit = (values) => {
    console.log(values);
  };
  console.log(123, INITIAL_REGISTRATION_VALUE);
  return (
    <Registration initialValues={INITIAL_REGISTRATION_VALUE} onSubmit={onSubmit} />
  );
};

export default RegistrationContainer;
