/* eslint-disable no-nested-ternary */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={ (props) => (isVerifying ? (
      <div />
    ) : isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  isVerifying: PropTypes.bool,
  location: PropTypes.string,
};

export default ProtectedRoute;
