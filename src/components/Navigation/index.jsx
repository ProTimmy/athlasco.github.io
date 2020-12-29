import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { getTagList, unsubscribeGetTagList } from '../../redux/actions';

import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

import navigationStyles from './navigationStyles';

const Navigation = (props) => {
  const history = useHistory();
  const location = useLocation();

  const { classes, dispatch, isAuthenticated } = props;

  useEffect(() => {
    if (location.pathname === '/editor') {
      // Get Tag List
      dispatch(getTagList());
    } else {
      // Unsubscribe tag list
      dispatch(unsubscribeGetTagList());
    }
  }, [location]);

  const handleRoute = (route) => {
    history.push(route);
  };

  return (
    <AppBar position='static' className={classes.root}>
      { isAuthenticated ? (
        <NavigationAuth
          classes={classes}
          handleRoute={handleRoute} />
      ) : (
        <NavigationNonAuth
          classes={classes}
          handleRoute={handleRoute} />
      )}
    </AppBar>
  );
};

const NavigationAuth = (props) => (
  <Toolbar className={props.classes.root}>
    <div className={props.classes.navigation}>
      <Button
        type='button'
        color='inherit'
        onClick={() => props.handleRoute('/')}
      >Home</Button>
      <Button
        type='button'
        color='inherit'
        onClick={() => props.handleRoute('/editor')}
      >Editor</Button>
    </div>
    <SignOutButton className={props.classes.signOutButton} />
  </Toolbar>
);

const NavigationNonAuth = (props) => (
  <Toolbar className={props.classes.root}>
    <div className={props.classes.navigation}>
      <Button
        type='button'
        color='inherit'
        onClick={() => props.handleRoute('/')}
      >Home</Button>
    </div>
    <SignInButton className={props.classes.signInButton} />
  </Toolbar>
);

Navigation.propTypes = {
  classes: PropTypes.any,
  dispatch: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

NavigationAuth.propTypes = {
  handleRoute: PropTypes.func,
  classes: PropTypes.any,
};

NavigationNonAuth.propTypes = {
  handleRoute: PropTypes.func,
  classes: PropTypes.any,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default withStyles(navigationStyles)(connect(mapStateToProps)(Navigation));
