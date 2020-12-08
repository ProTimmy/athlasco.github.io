import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import loginStyles from './loginStyles';
import { loginUser } from '../../redux/actions';

const Login = (props) => {
  const {
    dispatch, classes, loginError, isAuthenticated,
  } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = () => {
    dispatch(loginUser(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <TextField
          variant='outlined'
          margin='normal'
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          onChange={handleEmailChange}
        />
        <TextField
          variant='outlined'
          margin='normal'
          fullWidth
          id='password'
          label='Password'
          type='password'
          name='password'
          onChange={handlePasswordChange}
        />
        {loginError && (
          <Typography component='p' className={classes.errorText}>
            Incorrect email or password
          </Typography>
        )}
        <Button
          type='button'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={handleSubmit}
        >Sign In</Button>
      </Paper>
    </Container>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func,
  classes: PropTypes.any,
  loginError: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated,
});

export default withStyles(loginStyles)(connect(mapStateToProps)(Login));
