import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProtectedRoute from './components/ProtectedRoute';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Editor from './components/Editor';

const App = (props) => {
  const { isAuthenticated, isVerifying } = props;

  return (
    <div className='App'>
      <Navigation />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
        <ProtectedRoute
          path="/editor"
          component={Editor}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
      </Switch>
    </div>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  isVerifying: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isVerifying: state.auth.isVerifying,
});

export default connect(mapStateToProps)(App);
