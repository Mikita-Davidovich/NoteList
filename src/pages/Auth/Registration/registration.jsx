import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { Grid } from '@material-ui/core';

import { VALIDATION_SHEMA_REGISTRATION } from 'assets/validationShema';
import TextFieldWrapper from 'shared/FormsUI/TextField';
import DateTimePicker from 'shared/FormsUI/dateTimePicker';
import ButtonWrapper from 'shared/FormsUI/button';
import { PATH_LOGIN } from 'assets/paths';

import { Title, Wrapper, StyledContainer, LinkWrapper, NavLinkLogin } from '../styled';

const Registration = ({ initialValues, onSubmit }) => (
  <Wrapper>
    <Title>Registration</Title>
    <Grid item xs={12}>
      <StyledContainer maxWidth="md">
        <Formik
          initialValues={initialValues}
          validationSchema={VALIDATION_SHEMA_REGISTRATION}
          onSubmit={onSubmit}
        >
          <Form>
            <Grid container>
              <Grid item xs={12}>
                <TextFieldWrapper name="firstName" label="First Name" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="lastName" label="Last Name" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <DateTimePicker name="dateOfBirth" label="Date Of Birth" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="password" label="Password" type="password" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="confirmPassword" label="Confirm password" type="password" />
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
      <LinkWrapper>
        If you already have an account click
        <NavLinkLogin to={PATH_LOGIN}>Sign In</NavLinkLogin>
      </LinkWrapper>
    </Grid>
  </Wrapper>
);

Registration.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};
Registration.defaultProps = {
  initialValues: {},
};
export default Registration;
