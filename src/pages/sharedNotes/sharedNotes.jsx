import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../../styled';
import Header from '../../shared/header';

const SharedNotes = ({ openNavBar }) => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <Header openNavBar={openNavBar} />
    </div>
  );
};
SharedNotes.propTypes = {
  openNavBar: PropTypes.func.isRequired,
};

export default SharedNotes;
