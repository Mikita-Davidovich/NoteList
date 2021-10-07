import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';

import { Container, Grid } from '@material-ui/core';
import { VALIDATION_SHEMA_REGISTRATION } from 'assets/validationShema';
import useStyles from './styled';
import TextFieldWrapper from 'shared/FormsUI/TextField';
import DateTimePicker from 'shared/FormsUI/dateTimePicker';
import ButtonWrapper from 'shared/FormsUI/button';

const Registration = ({ initialValues, onSubmit }) => {
  const styles = useStyles();
  return (
    <Grid container className={styles.registrationWrapper}>
      <Grid item xs={12}>
        Registration
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={styles.formWrapper}>
            <Formik
              initialValues={initialValues}
              validationSchema={VALIDATION_SHEMA_REGISTRATION}
              onSubmit={() => onSubmit()}
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
                    <TextFieldWrapper name="password" label="Password" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name="confirmPassword" label="Confirm password" />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonWrapper>
                      Sumbit Form
                    </ButtonWrapper>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

Registration.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};
Registration.defaultProps = {
  initialValues: {},
};
export default Registration;
