import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Header from '../../shared/header';
import useStyles from '../../styled';

const About = ({ openNavBar }) => {
  const styles = useStyles();
  return (
    <>
      <Header openNavBar={openNavBar} className={styles.headerAbout} />
      <Box className={styles.aboutWapper}>
        <Box>
          <h2 className={styles.aboutHeaders}>Possibilities</h2>
          <p className={styles.aboutDescription}>You will never forget about your business because you can use this site with the ability to save, create and delete notes.</p>
        </Box>
        <Box>
          <h2 className={styles.aboutHeaders}>Functionality</h2>
          <p className={styles.aboutDescription}>You can easily create your own note with title and description</p>
          <p className={styles.aboutDescription}>You can edit your already created note</p>
          <p className={styles.aboutDescription}>You can add a new note</p>
          <p className={styles.aboutDescription}>You can delete an existing one</p>
          <p className={styles.aboutDescription}>You can also go through a simple registration and watch the notes of other people</p>
        </Box>
        <Box>
          <h2 className={styles.aboutHeaders}>How the project can be developed:</h2>
          <p className={styles.aboutDescription}>Add functionality to share your notes on social networks.</p>
          <p className={styles.aboutDescription}>Add the ability to select a frame for a note</p>
          <p className={styles.aboutDescription}>Add the ability to create your own,with unique frame design</p>
        </Box>
      </Box>
    </>
  );
};
About.propTypes = {
  openNavBar: PropTypes.func.isRequired,
};

export default About;
