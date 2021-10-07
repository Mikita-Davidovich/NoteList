import * as Yup from 'yup';

export const validationShemaLogIn = Yup.object({
  email: Yup.string().email('Wrong format!').required('Required!'),
  password: Yup.string().required('Required!').matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!]/g, 'Use letters(a-z A-Z) and numbers')
    .min(10, 'Password must be at least 10 characters long')
    .max(18, 'Password must not exceed 18 characters'),
});

export const VALIDATION_SHEMA_REGISTRATION = Yup.object({
  firstName: Yup.string().required('Requred'),
  lastName: Yup.string().required('Requred'),
  email: Yup.string().email('Invalid email').required('Requred'),
  dateOfBirth: Yup.date().required('Requred'),
  password: Yup.string().required('Required!').matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!]/g, 'Use letters(a-z A-Z) and numbers')
    .min(8, 'Password must be at least 8 characters long')
    .max(16, 'Password must not exceed 16 characters'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password not maches').required('Required'),
});
