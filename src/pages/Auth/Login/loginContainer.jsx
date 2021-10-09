import React from 'react';

import Login from './login';

const LoginContainer = () => {
  const INITIAL_LOGIN_VALUE = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Login initialValues={INITIAL_LOGIN_VALUE} onSubmit={onSubmit} />
  );
};

export default LoginContainer;
