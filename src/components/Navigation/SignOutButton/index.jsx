import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { logoutUser } from '../../../redux/actions';

const SignOutButton = (props) => {
  const handleSignOut = () => {
    const { dispatch } = props;

    dispatch(logoutUser());
  };

  return (
    <Button
      type='button'
      color='inherit'
      onClick={handleSignOut}
    >Sign Out</Button>
  );
};

SignOutButton.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLoggingOut: state.auth.isLoggingOut,
  logoutError: state.auth.logoutError,
});

export default connect(mapStateToProps)(SignOutButton);
