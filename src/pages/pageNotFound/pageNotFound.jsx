import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import errorImage404 from 'assets/images/errorImage404.jpg';

import { Error } from './styled';

export const PageNotFound = () => {
  const history = useHistory();
  const redirectBack = () => {
    history.goBack();
  };
  return (
    <>
      <Error>
        <img src={errorImage404} alt="errorImage404" />
      </Error>
      <Error>
        <Button variant="outlined" color="secondary" onClick={redirectBack}>
          Сlick here to return to the previous page
        </Button>
      </Error>
    </>
  );
};

export default PageNotFound;
