import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { Form, Formik } from 'formik';

import TextFieldWrapper from 'shared/FormsUI/TextField/textFieldWrapper';
import { VALIDATION_SHEMA_LOGIN } from 'assets/validationShema';
import ButtonWrapper from 'shared/FormsUI/Button/buttonWrapper';
import { PATH_REGISTRATION } from 'assets/paths';

import { Title, StyledContainer, Wrapper, LinkWrapperLogin, NavLinkLogin } from '../styled';

const Login = ({ initialValues, onSubmit }) => (
  <Wrapper>
    <Title>LOGIN</Title>
    <Grid item xs={12}>
      <StyledContainer maxWidth="md">
        <Formik
          initialValues={initialValues}
          validationSchema={VALIDATION_SHEMA_LOGIN}
          onSubmit={onSubmit}
        >
          <Form>
            <Grid container>
              <Grid item xs={12}>
                <TextFieldWrapper name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="password" label="Password" type="password" />
              </Grid>
              <Grid item xs={12}>
                <ButtonWrapper>
                  Sumbit Form
                </ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </StyledContainer>
      <LinkWrapperLogin>
        If you don`t have an account click
        <NavLinkLogin to={PATH_REGISTRATION}>Registration</NavLinkLogin>
      </LinkWrapperLogin>
    </Grid>
  </Wrapper>
);

Login.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

Login.defaultProps = {
  initialValues: {},
};

export default Login;
