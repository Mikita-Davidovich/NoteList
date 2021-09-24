import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import errorImage404 from '../../assets/images/errorImage404.jpg';
import useStyles from '../../styled';

export const PageNotFound = () => {
  const styles = useStyles();
  const history = useHistory();
  console.log(history);
  return (
    <>
      <div className={styles.error}>
        <img src={errorImage404} alt="errorImage404" />
      </div>
      <div className={styles.error}>
        <Button variant="outlined" color="secondary" onClick={() => history.goBack()}>
          Сlick here to return to the previous page
        </Button>
      </div>

    </>
  );
};

export default PageNotFound;
